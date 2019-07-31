import { CoinClient } from "../../../utils"
import { serialize } from "../../../utils"
import {PAGE_LIMIT} from "../../../../env"
import * as actionTypes from "./constants"

// get the tokens from the api
export const getTokens = (start) => {
    console.log(start)
    return async dispatch => {
        const params = {
            start: start,
            limit: PAGE_LIMIT
        }
        try {
            dispatch({ type: actionTypes.GET_TOKENS_REQUEST });
            const tokens = await CoinClient().get(`/v1/cryptocurrency/listings/latest?${serialize(params)}`)
            if(tokens){
                console.log(tokens)
                dispatch({ type: actionTypes.GET_TOKENS_SUCCESS, payload: tokens.data})
                return tokens.data.data
            }
        } catch (err){
            dispatch({ type: actionTypes.GET_TOKENS_FAILURE });
        }
    }
}