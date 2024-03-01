import {
  Center,
  ChakraProvider,
  Input
} from '@chakra-ui/react'
import { login } from './services/login';
import { CustomButton } from './components/Button/Button';
import { Card } from './components/Card';
import { Header } from './components/Header/Header';

function App() {
  return (
    <ChakraProvider>
      <Header>
        <Card paragraph='Faça o login' id={1}>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Center>
            <CustomButton onClick={login}>
              Logar
            </CustomButton>
          </Center>
        </Card>
      </Header>
    </ChakraProvider>
  );
}

export default App;
