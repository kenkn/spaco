/*
 * spa.js
 * Root namespace module
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

var spa = (function () {
  console.log("spa");

  var initModule = function ( $container ) {
    console.log("initmodule spa");
    spa.shell.initModule( $container );
  };

  return { initModule: initModule };
}());
