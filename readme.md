

## Example:

### Input
```
./index.html
```
```html
<!DOCTYPE html>
<html>
  <head>
    <base href="/"/>
    <meta charset="UTF-8"/>
    <meta name="theme-color" content="#000"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="#000"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimal-ui"/>
    <title>App</title>
    <link rel="stylesheet" href="/mn.css?hash="/>
  </head>
  <body>
    <div id="root">
      <noscript>You need to enable JavaScript to run this app.</noscript>
    </div>
    <script src="/app.js?hash="></script>
  </body>
</html>
```

```sh
hash-inject -f ./index.html
```


### Output
```html
<!DOCTYPE html>
<html>
  <head>
    <base href="/"/>
    <meta charset="UTF-8"/>
    <meta name="theme-color" content="#000"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="#000"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimal-ui"/>
    <title>App</title>
    <link rel="stylesheet" href="/mn.css?hash=6d26ab51456043be"/>
  </head>
  <body>
    <div id="root">
      <noscript>You need to enable JavaScript to run this app.</noscript>
    </div>
    <script src="/app.js?hash=560e6d26ab43b514"></script>
  </body>
</html>
```
