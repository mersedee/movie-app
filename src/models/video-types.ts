export interface Video {
    iso_639_1: string
    name: string
    key: string
    site: string
    size: number
    type: string
    official: boolean
    published_at: string
    id: string
}

export interface VideoList {
    id: string
    results: Video[]
}
