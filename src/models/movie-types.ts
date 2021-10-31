import {
  Collection,
  Genre, ProductionCompany, ProductionCountry, SpokenLanguage,
} from './general-types';

export interface Movie {
    adult: boolean
    backdrop_path: string
    genre_ids: string[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export interface MovieList {
    page: number
    results: Movie[]
    total_pages: number
    total_results: number
}

export interface MovieDetail extends Movie {
    belongs_to_collection: Collection
    homepage: string
    imdb_id: string
    revenue: number
    production_companies: ProductionCompany[]
    production_countries: ProductionCountry[]
    spoken_languages: SpokenLanguage[]
    genres: Genre[]
    status: string
    tagline: string
    video: boolean
}
