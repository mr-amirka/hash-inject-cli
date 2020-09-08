# hash-inject-cli

## Install

```sh
npm install -g hash-inject-cli
```

## Example:

```sh
hash-inject -f ./index.html
```

### Input
```
./index.html
```
```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="/mn.css?hash="/>
  </head>
  <body>
    <div id="root"></div>
    <script src="/app.js?hash="></script>
  </body>
</html>
```


### Output
```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="/mn.css?hash=6d26ab51456043be"/>
  </head>
  <body>
    <div id="root"></div>
    <script src="/app.js?hash=560e6d26ab43b514"></script>
  </body>
</html>
```
