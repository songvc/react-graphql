import { Stocks } from '../db/models';

const setupRoutes = app => {
    app.get('/stocks', async (req,res,next) => {
        const stocks = await Stocks.findAll(); 
        return res.json(stocks);
    });
}

export default setupRoutes;