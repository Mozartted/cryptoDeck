import {
    GET_TOKENS_REQUEST, GET_TOKENS_SUCCESS, GET_TOKENS_FAILURE
} from "./constants"


const initialState = {
    tokens: {
        data: [],
        status: {},
        loading: false,
    }
}

export default function DashboardReducer (state = initialState, action) {
    switch (action.type) {
        case GET_TOKENS_REQUEST:
          return {...state, loading: true}
        case GET_TOKENS_FAILURE:
          return state
          // return {...state, loading: false}
        case GET_TOKENS_SUCCESS:
          return {
            ...state,
            tokens: action.payload,
            loading:false
          }
        default:
          return state
      }
}