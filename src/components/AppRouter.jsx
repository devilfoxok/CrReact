import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { publicRoutes, privateRoutes } from '../router/routes'
import About from '../pages/About'
import Posts from '../pages/Posts'
import Error from '../pages/Error'
import PostIdPage from '../pages/PostIdPage'
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