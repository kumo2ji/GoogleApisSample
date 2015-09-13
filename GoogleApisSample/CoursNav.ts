/// <reference path="scripts/typings/jquery/jquery.d.ts" />
/// <reference path="scripts/typings/gapi/gapi.animeinfo.d.ts" />

namespace ui.CoursNav {
    import CoursObject = gapi.client.animeInfo.CoursObject
    const SELECTOR = '.nav-cours'
    export class CoursNav {
        private coursObjects: Array<CoursObject>
        constructor(coursObjects: Array<CoursObject>) {
            this.coursObjects = coursObjects
        }
        appendLi() {
            var ul = $(SELECTOR)
            _.each(this.coursObjects, (coursObject) => {
                var li = $('<li></li>', {
                })
            })
        }
    }
}