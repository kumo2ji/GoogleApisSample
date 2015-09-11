/// <reference path="gapi.d.ts" />
// Type definitions for Google API Client
// Project: https://code.google.com/p/google-api-javascript-client/
// Definitions by: Frank M <https://github.com/sgtfrankieboy>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module gapi.client {
    export function load(name: string, version: string, callback: () => any, root: string): void;
    module animeInfo {
        module get {
            export function anime(): HttpRequest<Response<AnimeInfo>>;
        }
        export class Response<T> {
            items: Array<T>;
            nextPageToken: string;
        }
        export class AnimeInfo {
            id: number;
            title: string;
            shortTitles: Array<string>;
            publicUrl: string;
            sequel: number;
            sex: number;
            twitterAccount: string;
            twitterHashTag: string;
        }
    }
}