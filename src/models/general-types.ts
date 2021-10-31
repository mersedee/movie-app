export type Tab = {
    key: string
    tab: any
}

export interface Genre {
    id: number
    name: string
}

export interface Collection {
    id: number
    name: string
    poster_path: string
    backdrop_path: string
}

export interface ProductionCompany {
    id: number
    logo_path: string
    name: string
    origin_country: string
}

export interface ProductionCountry {
    iso_3166_1: string
    name: string
}

export interface SpokenLanguage {
    iso_639_1: string
    name: string
}
