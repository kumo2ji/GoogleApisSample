/// <reference path="scripts/typings/underscore/underscore.d.ts" />
/// <reference path="scripts/typings/jquery/jquery.d.ts" />
namespace utils.nav {
    export function createStackedNav(values: Array<string>, isPills: boolean = false): JQuery {
        var ul = $('<ul></ul>', {
            class:'nav nav-stacked'
        })
        if (isPills) {
            ul.addClass('nav-pills')
        }
        _.each(values, (value) => {
            var li = $('<li></li>', {
                role: 'presentation',
                click: () => {
                    ul.children('li.active').removeClass('active')
                    li.addClass('active')
                }
            })
            var a = $('<a></a>', {
                href: '#',
                text: value
            })
            ul.append(li.append(a))
        })
        return ul
    }
}