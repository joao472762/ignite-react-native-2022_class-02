import { Heading } from "@components/Heading"
import { Text } from "@components/Text"
import { ListEmptyContainer } from "./styles"

interface ListEmptyProps {
    message: string
}

export const ListEmpty = ({message}: ListEmptyProps) => {
    return (
        <ListEmptyContainer>
            <Text>{message}</Text>
        </ListEmptyContainer>
    )
}