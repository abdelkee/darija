export interface CategoryType {
    title: string,
    img: string,
    color: string,
    path: string
}

export interface PronombreType {
    es_title: string,
    ar_title: string,
    es_example: string,
    ar_example: string
    gender: string,
    tooltip?: string
}


export interface FoodDataType {
    es_title: string,
    ar_title: string,
    plural: string,
    image_url: string
}

export interface FoodType {
    title: string,
    image_url: string,
    data: FoodDataType[]
}