import axios from "axios";
import { useSelector } from "react-redux";



const BASE_URL ="http://localhost:4000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTY1ZmYzMWQ3YWUyYTJkMzQ4YzkwYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDE0MDk1OCwiZXhwIjoxNjYwNDAwMTU4fQ.78Re6BbgX1UIC3RkPIWHhx94s2-U0euiTwWkNYXFo34";

export const publicRequest = axios.create ({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`},
})
