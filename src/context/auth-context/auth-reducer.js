import { LOGIN } from './auth-actions';

export type a ={
    q : string
}

const initialState: a = {
    placeName: '',
    places: []
};
const placeReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    value: action.payload
                })
            };
        default:
            return state;
    }
}
export default placeReducer;
