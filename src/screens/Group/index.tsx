import {Text} from '@components/Text'
    import { GroupContainer } from "./styles";
import { Heading } from "@components/Heading";

export function Group(){
    return (
        <GroupContainer>
            <Text fontSize="sm"> vamos testar</Text>
            <Heading fontSize="xl"> Header</Heading>
        </GroupContainer>
    )
}