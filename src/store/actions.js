  

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

export const INSERT_SECTORS = (sectors) => {
    return {
        type: 'INSERT_SECTORS',
        listSectors: sectors
    }
};

export const TRANSFORM_SECTORS = (sectors) => {
    return {
        type: 'TRANSFORM_SECTORS',
        listSectors: sectors
    }
};