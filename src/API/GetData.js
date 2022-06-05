export default class GetData {
    constructor() {
        this._api = 'https://where-pizza-default-rtdb.firebaseio.com/';
    }

    async getPizza(url) {
        const res = await fetch(`${this._api}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }
}