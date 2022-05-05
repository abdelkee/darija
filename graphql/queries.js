import { gql } from '@apollo/client'

export const GET_VOCAB_CATEGORIES = gql`
    query getCategories {
    categories {
        id,
        name,
        slug,
        image {
            url
        }
    }
}
`
export const GET_VOCAB_CATEGORY = gql`
    query getCategory($slug: String!) {
        category(where: {slug: $slug}) {
            id,
            name,
            slug,
            cards {
                id,
                spName,
                arName,
                plural
            }
        }
    }
`

export const GET_VOCAB_CARDS = gql`
    query getCards($slug: String!) {
        cards(where: {category: {slug: $slug}}) {
            id,
            spName,
            arName,
            plural,
            gender,
            category {
                id,
                slug
            }
        }
    }
`