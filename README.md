# phantomjs01

## Links
[phantomjs](http://phantomjs.org/page-automation.html)
[npm phantomjs](https://www.npmjs.com/package/phantomjs)

## 1. Usage:
```sh
$ cd ~
$ vi ~/.bash_profile
$ source ~/.bash_profile
$ nvm list

$ cd workspace_ng/phantomjs01/
$ npm i phantomjs-prebuilt
$ node_modules/.bin/phantomjs

$ ~/Applications/phantomjs-2.1.1-windows/bin/phantomjs.exe
$ vi loadspeed.js
$ ~/Applications/phantomjs-2.1.1-windows/bin/phantomjs.exe loadspeed.js http://www.google.com
$ ~/Applications/phantomjs-2.1.1-windows/bin/phantomjs.exe pageAutomation.js
$ ~/Applications/phantomjs-2.1.1-windows/bin/phantomjs.exe jQuery01.js

$ node
> var phantom = require('phantomjs-prebuilt');
> phantom.version
> .exit
```

## 2. Page Automation
```js
var page = require('webpage').create();
console.log('The default user agent is ' + page.settings.userAgent);
page.settings.userAgent = 'SpecialAgent';
page.open('http://www.httpuseragent.org', function(status) {
  if (status !== 'success') {
    console.log('Unable to access network');
  } else {
    var ua = page.evaluate(function() {
      return document.getElementById('qua').textContent;
    });
    console.log(ua);
  }
  phantom.exit();
});
```

## 3. jQuery
```js
var page = require('webpage').create();
page.open('http://www.sample.com', function() {
  page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
    page.evaluate(function() {
      $("button").click();
    });
    phantom.exit()
  });
});
```
