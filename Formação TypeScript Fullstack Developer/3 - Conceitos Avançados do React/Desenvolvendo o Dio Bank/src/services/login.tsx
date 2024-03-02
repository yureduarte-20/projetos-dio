import { api } from "../api"
import { User } from "../components/AppContext"
export const login = async (email: string, senha:string): Promise<User | boolean> => {
    const data: any = await api

    if(email !== data.email) return false
    if(senha !== data.password) return false

    return Object.assign<Partial<User>, any>({},data)
}
