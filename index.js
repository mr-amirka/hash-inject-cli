#!/usr/bin/env node
const fs = require('fs');
const Path = require('path');
const crypto = require('crypto');
const program = require('commander');
const pkg = require('./package.json');

program
  .version(pkg.version, '-v, --version')
  .option('-f, --file [file]', 'inject hash of build files into html file');

program.on('--help', () => {
  console.log('');
  console.log('Example:');
  console.log('');
  console.log('$ hash-inject -f ./index.html');
});

program.parse(process.argv);

const injectionFileName = program.file;

if (!injectionFileName) return program.help();
const dirname = Path.dirname(injectionFileName);
const regexpInject = /(=['"]?)([^'"]+?)([?&]?hash=)([^&'" >]*)/gim;
const secret = '';

fs.readFile(injectionFileName , 'utf8', (err, raw) => {
  if (err) {
    console.error(err);
    return;
  }
  let changed, length = 0, i = 0;
  const injections = [];
  raw.replace(regexpInject, (all, eq, urlPart) => {
    length++;
    const [filename] = urlPart.split('?');
    const filepath = Path.join(dirname, filename);
    fs.readFile(filepath, 'utf8', (err, content) => {
      injections.push(
        err ? '' : crypto
          .createHmac('sha256', secret)
          .update(content)
          .digest('hex')
          .substr(0, 16)
      );
      ++i < length || end();
    });
  });
  function end() {
    let index = 0;
    raw = raw.replace(
      regexpInject,
      (all, eq, urlPart, prefix, lastHash) => {
        let hash = injections[index++];
        hash == lastHash || (changed = true);
        return eq + urlPart + prefix + hash;
      },
    );
    changed && fs.writeFile(injectionFileName, raw, 'utf8', (err) => {
      err && console.error(err);
    });
  }
});
