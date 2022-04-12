# Vanilla-JS-SPA
A vanilla JavaScript Single Page Application template using Express js.
* API REST service included.
* Static files server.
***
## Installation

This app uses Express js 
```
$ git clone https://github.com/RaySalgado13/Vanilla-JS-SPA.git
$ cd Vanilla-JS-SPA/
$ npm init 
$ npm install express --save
$ npm start
```
***
## Usage
* On public/js/ must create a JS file for every page you want to show. 
* This template provides an example using page1.js and page2.js. 
* Every page must import and extend AbstractView class.
* On public/js/main.js must define the frontend routes of the project:
~~~
{
  path: "/your_path",
  view: Component
},
~~~~
* Every <a> tag must contain data-link attribute as in the example below
~~~
 <a href="/your_route" data-link> Go to next Page </a>
~~~

* Use index.js as the Express js backend entry point







