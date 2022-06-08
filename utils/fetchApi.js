import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async(url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '8f9b4d65a7mshb30e6bceeea01e9p1214bajsn5b6f2aaca75b'
        },
    });

    return data;
}