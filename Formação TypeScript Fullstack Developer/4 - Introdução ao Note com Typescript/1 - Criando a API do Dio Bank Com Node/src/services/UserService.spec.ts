import { User, UserService } from "./UserService";

describe('UserService', () => {
    let mockDb: User[] = []
    const userService = new UserService(mockDb);
    it('Deve adicionar um novo usuário', () => {
        const mockConsole = jest.spyOn(global.console, 'log')
        userService.createUser('nath', 'nath@test.com');
        expect(mockConsole).toHaveBeenCalledWith('DB atualizado', mockDb)
    })
    it('Deve retornar erro', () =>{
        expect(() => userService.deleteUser('yure')).toThrow()
    })
    it('Deletar usuário', () =>{
        const mockEmail = 'yure@test.com'
        const mockConsole = jest.spyOn(global.console, 'log')
        userService.createUser('yure', mockEmail);
        expect(mockConsole).toHaveBeenCalledWith('DB atualizado', mockDb)

        expect( userService.deleteUser(mockEmail)).toBeTruthy()
        expect(userService.getAllUsers().find(item => item.email === mockEmail)).toBeUndefined()
    })
})
