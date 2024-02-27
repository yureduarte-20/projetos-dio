import { Button } from "@chakra-ui/react";
import React from "react";
export interface CustomButtonInterface extends React.PropsWithChildren {
    onClick?: (event? : React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
};
export function CustomButton({ onClick, children } : CustomButtonInterface ) {
    return (
        <Button onClick={onClick} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
            {children}
        </Button>
    );
}