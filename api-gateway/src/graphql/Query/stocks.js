import StocksService from '../Adapters/StocksService';

const stocksResolver = async () => {
    return await StocksService.fetchAllStock();
}

export default stocksResolver;