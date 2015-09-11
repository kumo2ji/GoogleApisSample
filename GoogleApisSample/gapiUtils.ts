/// <reference path="scripts/typings/underscore/underscore.d.ts" />
/// <reference path="scripts/typings/gapi/gapi.animeinfo.d.ts" />
namespace gapiUtils {
    import Response = gapi.client.animeInfo.Response
    import AnimeInfo = gapi.client.animeInfo.AnimeInfo
    const ROOT = 'https://animeinfoserver.appspot.com/_ah/api'

    export function loadGapi(callback: () => void) {
        gapi.client.load('animeInfo', 'v1', callback, ROOT)
    }

    export function getAnime(callback: (resp: Response<AnimeInfo>) => void) {
        gapi.client.animeInfo.get.anime().execute(callback)
    }
}