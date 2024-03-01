import { Request, Response } from 'express'
import { UserService } from '../services/UserService'

export class UserController {
    userService: UserService
    
    constructor(
        userService = new UserService()
    ){
        this.userService = userService
    }

    createUser = (request: Request, response: Response): Response => {
        const user = request.body

        if(!user.name){
            return response.status(400).json({ message: 'Bad request! Name obrigatório'})
        }
        if(!user.email){
            return response.status(400).json({ message: 'Bad request! Email obrigatório'})
        }
        this.userService.createUser(user.name, user.email)
        return response.status(201).json({ message: 'Usuário criado'})
    }

    getAllUsers = (request: Request, response: Response) => {
        const users = this.userService.getAllUsers()
        return response.status(200).json( users )
    } 
    public deleteUser(request: Request, response: Response){
        const { email } = request.body;
        if(!email){
            return response.status(400).json({ message: 'Bad request! Email obrigatório'})
        }
        try{
            this.userService.deleteUser(email)
            return response.status(204).send()
        }catch(e: any){
            return response.status(404).json({ message: e.message })
        }
            
    }
}
