import axios from 'axios';

const API_KEY = '46890776-0488e2a41df654acea73f1764';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1, perPage = 40) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: perPage,
    };

    try {
        const { data } = await axios.get(BASE_URL, { params });
        return data;
    } catch (error) {
        console.error('Error fetching images:', error);
        throw error;
    }
}
