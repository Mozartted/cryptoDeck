import React from "react"
import Dashboard from "../layouts/dashboard";
import {useSelector, useDispatch} from "react-redux";
import {getTokens} from "../../store/action"


export default function DashboardContainer () {
    const tokens = useSelector(state => state.dashboardReducer.tokens);
    const loading = useSelector(state => state.dashboardReducer.loading);
    const dispatcher = useDispatch()
    return (
        <Dashboard 
            tokens={tokens} 
            loading={loading}  
            getTokens={(start) => dispatcher(getTokens(start)) }
        ></Dashboard>
    )
}
