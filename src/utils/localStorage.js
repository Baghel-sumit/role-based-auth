export const getLocalStorageKey = (key) => (
    localStorage.getItem(key)
);

export const setLocalStorageKey = (key, value) => (
    localStorage.setItem(key, value)
)

export const removeLocalStorage = () => (
    localStorage.clear()
)