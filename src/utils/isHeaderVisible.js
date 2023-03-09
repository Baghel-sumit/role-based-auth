export const isHeaderVisible = (pathname) => {
    if(pathname.includes('login')){
        return false;
    }
    return true;
}