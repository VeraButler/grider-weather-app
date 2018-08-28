import FETCH_WEATHER from '../actions/index';

export default function(state = [], action) {
    switch (action.type){
        case FETCH_WEATHER:
        //return a new instance of state every time
        //return state.concat([action.payload.data]);
        return [ action.payload.data, ...state];
    }
    return state;
}