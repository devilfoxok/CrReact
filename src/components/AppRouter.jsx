import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { publicRoutes, privateRoutes } from '../router/routes'
import { AuthContext } from '../context'
import { useContext } from 'react'
import Loader from './UI/Loader/loader'

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if (isLoading) {
        return <Loader/>
    }

  return (
    isAuth
    ?
    <Routes>
        {privateRoutes.map( route => 
            <Route exact={route.exact}
            key={route.path}
            path={route.path}
            element={route.element} />
        )}
    </Routes>
    :
    <Routes>
        {publicRoutes.map( route => 
            <Route exact={route.exact}
            key={route.path}
            path={route.path}
            element={route.element} />
        )}
    </Routes>
  )
}

export default AppRouter
