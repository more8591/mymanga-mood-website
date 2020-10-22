//  FILE: Website Effects
//  Created by Victor Moreno
//  Date: 10/20/2020

function splash() {
 var loop = function(idx, bundleTXT) {
  var activeTXT = ".chgTXT" + idx;
  $(activeTXT)
   .delay(activeTXT)
   .fadeIn(fadeDuration)
   .delay(activeTXT)
   .fadeOut(fadeDuration, function() {
    loop( (idx + 1) % bundleTXT, bundleTXT );
   });
 }
 loop(0, $('.chgTXT').length);

 $(bar).fadeIn(3500);
}

$(document).ready(function() {


});
