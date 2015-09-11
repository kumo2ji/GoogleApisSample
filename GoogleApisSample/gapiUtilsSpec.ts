/// <reference path="gapiutils.ts" />
/// <reference path="scripts/typings/jasmine/jasmine.d.ts" />

describe('gapiUtilsモジュール', () => {
    beforeAll((done) => {
        gapiUtils.loadGapi(() => {
            done()
        })
    })
    describe('getAnimeメソッドのテスト', () => {
        var response: gapi.client.animeInfo.Response<gapi.client.animeInfo.AnimeInfo>
        beforeAll((done) => {
            gapiUtils.getAnime((resp) => {
                response = resp
                done()
            })
        })
        it('アニメ情報が取得できている', () => {
            expect(response).not.toBeNull()
            expect(response.items).not.toBeUndefined()
            expect(response.items.length).toBeGreaterThan(0)
            _.each(response.items, (value) => {
                expect(value.id).toBeGreaterThan(0)
                expect(value.title.length).toBeGreaterThan(0)
            })
        })
    })
})