const CLEAR = 'ticker/CLEAR';
const SET = 'ticker/SET';

const DEFAULT_STATE = null;

const tickerReducer = (state = DEFAULT_STATE, action = {}) => {
    switch (action.type) {
        case SET: 
            return action.tickers;
        case CLEAR:
            return null;
    }
    return state;
}

export default tickerReducer;

export const setTickers = tickers => {
    return { tickers, type: SET }
};

export const clearTickers = () => {
    return { type: CLEAR }
}
