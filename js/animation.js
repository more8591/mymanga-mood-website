// ANIMATIONS STUFF BY VICTOR MORENO

//==================//
//      FADE IN     //
//==================//

function showList() {

    var mTitle = $.Deferred().resolve();

    $("li").get().forEach(e => {
        mTitle = mTitle.then(() => {
            return $(e).fadeIn(3000);
        });
    });



}