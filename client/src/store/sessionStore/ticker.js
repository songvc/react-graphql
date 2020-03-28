const CLEAR = 'ticker/CLEAR';
const SET = 'ticker/SET';

const DEFAULT_STATE = null;

const tickerReducer = (state = DEFAULT_STATE, action = {}) => {
    switch (action.type) {
        case SET: 
            return null;
        case CLEAR:
            return null;
    }
    return state;
}

export default tickerReducer;

// export const setSession = session => {
//     return { session, type: SET }
// };

// export const clearSession = () => {
//     return { type: CLEAR }
// }
