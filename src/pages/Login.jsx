import React, { useContext } from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButton from '../components/UI/button/MyButton'
import { AuthContext } from '../context'

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

  return (
    <div>
      <h1> Log in Page</h1>
        <form onSubmit={login}>
            <MyInput type='text' placeholder='Login'/>
            <MyInput type='password' placeholder='Password'/>
            <MyButton>Log in</MyButton>
        </form>
    </div>
  )
}

export default Login
