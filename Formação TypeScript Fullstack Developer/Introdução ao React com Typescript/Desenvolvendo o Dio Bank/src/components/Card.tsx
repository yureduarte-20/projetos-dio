import { Box, Center } from "@chakra-ui/react"
import { PropsWithChildren } from "react"

interface ICard extends PropsWithChildren{
  id: number,
  paragraph: string,
}

export const Card = ({ id, paragraph, children }: ICard) => {
  return (
    <Box id={id.toString()} minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
      <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
        <Center>
          {paragraph}
        </Center>
        {children}
      </Box>
    </Box>
  )
}