import axios from "axios";
import { ADD_LOG, CLEAR_CURRENT, DELETE_LOG, GEt_LOGS, LOGS_ERROR, SEARCH_LOGS, SET_CURRENT, SET_LOADING, UPDATE_LOG } from "./types"


// set loading true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

//fetch all logs from database

export const getLogs = () => async dispatch =>  {

    try {
        setLoading();
        const response = await axios.get('http://localhost:3001/logs')
        dispatch({
            type: GEt_LOGS,
            payload: response.data
        })
    }

    catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
} 

export const logDelete = (id) => async dispatch => {
    try{
        setLoading()
        await axios.delete(`http://localhost:3001/logs/${id}`)
        dispatch({
            type: DELETE_LOG,
            payload: id
        })

    } catch(err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}
    
export const addLog = (log) => async dispatch => {
    try {
        setLoading()
        const response = await axios.post('http://localhost:3001/logs', log );
        dispatch ({
            type: ADD_LOG,
            payload: response.data
        })
    } catch(err) {
        dispatch ({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}

export const setCurrent = (log) =>{
    return {
        type: SET_CURRENT,
        payload: log
    }
}

export const clearCurrent = () => {
    return{
        type: CLEAR_CURRENT
    }
}

export const editLog = (log) => async dispatch => {
    try{
        setLoading()
        const response = await axios.put(`http://localhost:3001/logs/${log.id}`, log)
        dispatch({
            type: UPDATE_LOG,
            payload: response.data
        })
    }catch(err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.log
        })
    }
}

export const logSearch = (text) => async dispatch => {
    try{
        setLoading()
        const response = await axios.get(`http://localhost:3001/logs?q=${text}`)
        dispatch({
            type: SEARCH_LOGS,
            payload: response.data
        })
    }catch(err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}