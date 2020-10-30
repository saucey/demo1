  

export const LOGIN_USER = (user) => {
    return {
        type: 'LOGIN',
        userLoggedIn: user
    }
}

export const LOGOUT_USER = () => {
    return {
        type: 'LOGOUT',
        userLoggedIn: null
    }
}