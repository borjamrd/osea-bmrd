export interface Song {
    id: number;
    title: string;
    poster: string;
    genre: string[];
    year: number;
    duration: number;
    rating: number;
    artist: number;
}

export interface Artist {
    id: number;
    name: string;
    bornCity: string;
    birthdate: string;
    img: string;
    rating: number;
    songs: number[];
}

export interface Company {
    id: number;
    name: string;
    country: string;
    createYear: number;
    employees: number;
    rating: number;
    songs: number[];
}