import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const backendURL = 'https://api.migato.live/api/v1';

export const getUserDetails = createAsyncThunk(
    'auth/getUserDetails',
    async (_, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('userToken')}`,
                },
            }
            const { data } = await axios.get(`${backendURL}/user/profile`, config)
            return data
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
);

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            await axios.post(
                `${backendURL}/auth/register`,
                { email, password },
                config
            );
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const { data } = await axios.post(
                `${backendURL}/auth/login`,
                { email, password },
                config
            )
            // debug
            // console.log("Respuesta del login:", data)
            const userToken = data.token.accessToken
            // console.log("Token extraído:", userToken)
            if (userToken) {
                localStorage.setItem('userToken', userToken)
            }
            return data
        } catch (error) {
            if (error.response && error.response.data.message) {
                console.log("Error en loginUser:", error.response.data.message)
                return rejectWithValue(error.response.data.message)
            } else {
                console.log("Error en loginUser:", error.message)
                return rejectWithValue(error.message)
            }
        }
    }
)