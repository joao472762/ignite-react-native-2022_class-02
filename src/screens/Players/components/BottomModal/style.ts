import styled from "styled-components/native";

export  const BottomModalContent = styled.View`
  flex: 1;
  background-color: ${({theme:{colors}}) => colors.gray[500]};
  padding: 8px 24px;
  align-items: center;



`

export const Overlay = styled.View`
  flex: 1;
 
`


export  const ButtonsWrraper  = styled.View`  
  flex-direction: row;
  justify-content: space-between;

  margin-top: auto;
  width: 100%;
`

interface ButtonTypeStyleProps {
  type: 'DEFAULT' | 'DANGER'
}
export const Button = styled.TouchableOpacity<ButtonTypeStyleProps>`
  align-items: center;

  width: 47%;
  padding: 16px;
  border-radius: 6px;
  background-color: ${({theme:{colors},type}) => 
    type === 'DEFAULT'
    ? colors.gray[400]
    : colors.danger[700]
  };

`