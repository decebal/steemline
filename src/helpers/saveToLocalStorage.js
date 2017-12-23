export default function saveToLocalStorage(key, value) {
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem(key, JSON.stringify(value));
    }
}
