import got from 'got';

const STOCK_SERVICE_URI = 'http://stock-service:7100';

export default class StocksService {
    static async fetchAllStock() {
        const body = await got.get(`${STOCK_SERVICE_URI}/stocks`).json();
        return body;
    }
}