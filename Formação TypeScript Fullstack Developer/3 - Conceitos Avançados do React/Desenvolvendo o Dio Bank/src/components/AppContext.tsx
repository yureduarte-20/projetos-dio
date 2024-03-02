import { createContext, useEffect, useState } from "react"
import { changeLocalStorage, getAllLocalStorage } from "../services/storage"
import { login as _login } from '../services/login'
export interface User {
  name: string,
  email: string
}
interface IAppContext {
  user: User | null,
  isLoggedIn: boolean,
  login: ({ email, senha } : { email: string, senha: string }) => Promise<boolean | User>,
  logout: () => void
}
export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [user, setUser] = useState<User | null >(null)
  

  const login =  async ({ email, senha } : { email: string, senha: string }) =>{
    const res: any = await _login(email, senha)
    if(res){ 
      setIsLoggedIn(true)
      changeLocalStorage({ email: res.email, login: true, name: res.name  })
      setUser({ email, name: res.name })
    } else {
      setIsLoggedIn(false)
    }
    return res
  }
  const logout = () => {
    setIsLoggedIn(false)
    changeLocalStorage({ email: undefined, login: false, name: undefined  })
  }
  const storage = getAllLocalStorage()
  useEffect(() => {
    if (storage) {
      const { login, email, name } = JSON.parse(storage)
      setIsLoggedIn(login)
      setUser({ email, name })
    }
  }, [])



  return (
    <AppContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AppContext.Provider>
  )
}
