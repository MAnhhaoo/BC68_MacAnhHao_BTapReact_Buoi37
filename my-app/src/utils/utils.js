export const getValueLocalStorage = (key) => {
    if (typeof localStorage !== 'undefined') {
        let dataLocal = localStorage.getItem(key);
        return dataLocal ? JSON.parse(dataLocal) : null;
    }
    return null;
}

export const setValueLocalStorage = (key, value) => {
    if (typeof localStorage !== 'undefined') {
        let stringData = JSON.stringify(value);
        localStorage.setItem(key, stringData);
    }
}
