export interface PageSectionType {
    title: string
    img: string
    color: string
    path: string
}

export interface PronombreType {
    es_title: string
    ar_title: string
    es_example: string
    ar_example: string
    gender: string
    tooltip?: string
    examples: {
        es: string
        ar: string
    }[]
}

export type PronombreDataObjType = Record<"yo" | "tu" | "el" | "ella" | "nosotros" | "ustedes" | "ellos", PronombreType[]>

export interface ItemType {
    es_title: string
    ar_title: string
    plural: string
    image_url: string
}

export interface CategoryType {
    title: string
    image_url: string
    data: ItemType[]
}

export interface TestDataType {
    pronombreTitle: string,
    testData: {
        question: string,
        options:
        {
            answer: string,
            correct: boolean
        }[]
    }[]

}