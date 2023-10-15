import { useEffect, useState } from 'react'
import Cookie from 'js-cookie'

export default function useAuth() {
    const [token, setToken] = useState('');

    useEffect(() => {
        logIn()
    }, [])

    function logIn() {
        const tokenServ = Cookie.get('access_token');

        setToken(tokenServ)
    }

    function logOut() {
        Cookie.remove('access_token');
        setToken(null)
    }

    return { logIn, logOut, token }
}