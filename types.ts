

export interface searchParamsInterface {
        brands: string[]
        types: string[]
        genders: string[]
        seasons: string[]
        selectedOption: string
        query:string
}

export interface ProductInterface {
        article: string
        brand: string
        bucket: string
        color: string
        compound: string
        country: string
        created_at: string
        discount_price: null | number
        gender: string
        id: number
        image_path: string
        in_stock: boolean
        model: string
        price: number
        season: string
        sizes: number[]
        type: string
}

export interface filtersInterface {
        brands?: string[]
        colors?: string[]
        genders?: string[]
        seasons?: string[]
        types?: string[]
}