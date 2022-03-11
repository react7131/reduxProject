import axios from "axios"
import { setLoading } from "./logAction"
import { ADD_TECH, DELETE_TECH, GET_TECHS, SET_LOADING, TECHS_ERRORS } from "./types"

export const getTechs = () => async dispatch => {
    try {
        setLoading()
        const response = await axios.get('http://localhost:3001/techs')
        dispatch({
            type: GET_TECHS,
            payload: response.data
        })
    } catch (err) {
        dispatch({
            type: TECHS_ERRORS,
            payload: err.response.data
        })
    }
}

export const addTech = (tech) => async dispatch => {
    try{
        setLoading()
        const response = await axios.post('http://localhost:3001/techs' , tech)
        dispatch({
            type: ADD_TECH,
            payload: response.data
        })
    } catch(err) {
        dispatch({
            type: TECHS_ERRORS,
            payload: err.response.data
        })
    }
}

export const techDelete = (id) => async dispatch => {
    try {
        setLoading()
        await axios.delete(`http://localhost:3001/techs/${id}`)
        dispatch({
            type: DELETE_TECH,
            payload: id
        })
    }
    catch(err) {
        dispatch({
            type: TECHS_ERRORS,
            payload: err.response.data
        })
    }
}