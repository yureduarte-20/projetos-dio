import { Box, Center, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import DButton from "../components/DButton";

const Home = () => {
    const [ email, setEmail ] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const { login } = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async (email: string, senha: string) => {
        const loggedIn = await login({ email, senha })

        if(!loggedIn){
            return alert('Login inválido')
        }
        navigate('/conta/1')
    }
  
    return (
        <Box padding="25px">
            <Card>
                <Center>
                    <h1>Faça o login</h1>
                </Center>
                <Input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <Input placeholder="password" value={senha} onChange={e => setSenha(e.target.value)} />
                <Center>
                    <DButton
                        onClick={() => validateUser(email, senha)}
                    />
                </Center>
            </Card>
        </Box>
    );
}

export default Home;
