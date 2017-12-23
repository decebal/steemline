export default function loadFromLocalStorage(key) {
    if (typeof (Storage) !== "undefined") {
        return JSON.parse(localStorage.getItem(key));
    }
}
