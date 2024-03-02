import { PropsWithChildren, useCallback, useContext } from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { AppContext } from "./components/AppContext"
import Conta from "./pages/Conta"
import ContaInfo from "./pages/ContaInfo"
import Home from "./pages/Home"

const MainRoutes = () => {
    const { isLoggedIn } = useContext(AppContext)
    const PrivateRoute = ({ children }: any) => {
        if (isLoggedIn) {
            return children;
        }
        return <Navigate replace to={'/'} />
    }
    return (
        <Routes>
            <Route path='/conta/:id' element={
                <PrivateRoute>
                    <Conta />
                </PrivateRoute>} />

            <Route path='/infoconta' element={
                <PrivateRoute>
                    <ContaInfo />
                </PrivateRoute>} />
            <Route path='/' element={<Home />} />

        </Routes>
    )
}

export default MainRoutes
