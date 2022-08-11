import { loginFailure, loginStart, loginSuccess } from "./userSlice"
import axios from 'axios';
export const login = async (dispatch,user)=>{
    dispatch(loginStart());
    try {
        
        const response = await axios.post('http://localhost:4000/api/auth/login', user)
        dispatch(loginSuccess(response.data))
    } catch (err) {
        dispatch(loginFailure())
        
    }
}