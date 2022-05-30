export default class GetData {
    constructor() {
        this._api = '/data/data.json';
    }

    async getPizza() {
        const res = await fetch(`${this._api}`);

        if (!res.ok) {
            throw new Error(`Could not fetch, status: ${res.status}`);
        }

        return await res.json();
    }
}