export interface User {
    name: string
    email: string
}

const db = [
    {
        name: "Joana",
        email: "joana@dio.com",
    }
]

export class UserService {
    db: User[]

    constructor(
        database = db
    ){
        this.db = database
    }

    createUser = (name: string, email: string) => {
        const user = {
            name,
            email
        }

        this.db.push(user)
        console.log('DB atualizado', this.db)
    }

    getAllUsers = () => {
        return this.db
    }
    deleteUser = (email:string) =>
    {
        const user = this.db.find(user => user.email === email)
        if(!user) throw new Error('Usuário não encontrado')
        this.db = this.db.filter(user => user.email !== email)
        return true;
    }
}

