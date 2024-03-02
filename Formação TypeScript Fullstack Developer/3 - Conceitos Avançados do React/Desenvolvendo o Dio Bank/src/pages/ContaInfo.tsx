import { Text } from "@chakra-ui/react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { Card } from '../components/Card'
import { getAllLocalStorage } from "../services/storage"
const ContaInfo = () => {

    const user = JSON.parse(getAllLocalStorage() ?? '{}')
    return (
        <>
            <Card>

                <Text fontSize='3xl' fontWeight='bold'>
                    Nome: {user.name}
                </Text>
                <Link to='/conta/1'>
                    <Text fontSize='xl'>
                        Email: {user.email}
                    </Text>
                </Link>
            </Card>
        </>
    )
}

export default ContaInfo
