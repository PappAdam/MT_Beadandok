export interface Song {
    _id: number;
    TITLE: string;
    ARTIST_ID: number;
    TIME: string;
    BPM: number;
    YEAR: number;
    GENRE: string;
}

export interface Artist {
    _id: number;
    artist: string;
    fame: number;
    popularity: number;
}
