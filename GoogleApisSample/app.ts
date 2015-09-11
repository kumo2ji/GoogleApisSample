/// <reference path="scripts/typings/underscore/underscore.d.ts" />
/// <reference path="scripts/typings/jquery/jquery.d.ts" />
/// <reference path="scripts/typings/gapi/gapi.animeinfo.d.ts" />
declare var init: Function
declare var onclick: (eval: MouseEvent) => any


module app {
    export function init() {
        gapiUtils.loadGapi(() => {
            gapiUtils.getAnime((resp) => {
                console.log(resp);
                _.each(resp.items, (value) => {
                    var li = $('<li></li>', {
                        role: 'presentation',
                        click: () => {
                            $('ul.nav-year > li.active').removeClass('active')
                            li.addClass('active')
                        }
                    })
                    var a = $('<a></a>', {
                        href: '#',
                        text: value.twitterAccount
                    })
                    $('.nav-year').append(li.append(a))
                })
            })
        })
    }
}

init = app.init
onclick = (eval: MouseEvent) => {
    app.init()
}