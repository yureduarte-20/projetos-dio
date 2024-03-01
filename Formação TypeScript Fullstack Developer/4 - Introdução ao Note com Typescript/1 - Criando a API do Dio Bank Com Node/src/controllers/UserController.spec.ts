import { UserController } from "./UserController";
import { UserService, User } from '../services/UserService'
import { Request, response } from 'express'
import { makeMockResponse } from "../__mocks__/mockResponse.mock";

describe('UserController', () => {
    
    const mockUserService = new UserService()
    const userController = new UserController(mockUserService as UserService);


    it('Deve adicionar um novo usuário', () => {
        const mockRequest = {
            body: {
                name: 'Nath',
                email: 'nath@test.com'
            }
        } as Request
        
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({ message: 'Usuário criado' })
    })
    it('Deve tentar adicionar um usuário sem nome', async () => {
        const mockRequest = {
            body: {
                //name: 'Nath',
                email: 'nath@test.com'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad request! Name obrigatório' })
    })
    it('Deve listar os usuários', async () => {
        const mockRequest = {} as Request;
        const mockResponse = makeMockResponse()
        const mockSpy = jest.spyOn(mockUserService, 'getAllUsers')
        userController.getAllUsers(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(200)
        expect(mockSpy).toBeCalled()

    })
    it('Deve tentar adicionar um usuário sem email', async () => {
        const mockRequest = {
            body: {
                name: 'Nath',
                //email: 'nath@test.com'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad request! Email obrigatório' })
    })

    it('Deve tentar deletar um usuário com email inválido', () => {
        const mockRequest = {
            body: {
                //name: 'Nath',
                //email: 'nath@test.com'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.deleteUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad request! Email obrigatório' })
    })

})
