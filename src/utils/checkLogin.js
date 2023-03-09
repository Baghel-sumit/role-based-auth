import { getLocalStorageKey } from "./localStorage"

export const checkLogin = (pathname, navigate) => {
    const token = getLocalStorageKey('token');
    if(!token){
        return navigate('/login');
    }else if(pathname.includes('login')){
        return navigate('/');
    }
}