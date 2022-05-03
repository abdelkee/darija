import { Center, Text } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import Category from "./Vocab/Category"
import WordDetails from "./Vocab/WordDetails"



export default function DataFiltered({data, onOpen}) {
    const { keywordSearched, appBarHeading } = useSelector(state => state.general)

    if(keywordSearched === '') {
        return (
            <>
                {data.length > 0 ? 
                    data.map(each => {
                        if(appBarHeading === 'Vocabulario') {
                            return <Category key={each.id} category={each} onOpen={onOpen}/>
                        } else {
                            return <WordDetails key={each.id} card={each} onOpen={onOpen}/>
                        }
                    })
                :
                <Center>
                    <Text fontWeight={'semibold'} letterSpacing={1} color={'purple.300'} >Añade la primera palabra de {category.name}</Text>
                </Center>}
            </>
        )
    } else {
        if(appBarHeading === 'Vocabulario') {
            return (
                data.filter(each => {
                    return each.name.toLowerCase().includes(keywordSearched)
                }).map((category) =>( <Category key={category.id} category={category} onOpen={onOpen}/> ))
            )
        } else {
            return (
                data.filter(each => {
                    return each.spName.toLowerCase().includes(keywordSearched) || each.arName.toLowerCase().includes(keywordSearched)
                }).map((card) =>( <WordDetails key={card.id} card={card} onOpen={onOpen}/> ))
            )
        }
    }
}