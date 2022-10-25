import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "2bb211a44af411c1339a508066d81474";
export const IMG = (path, w) => `https://image.tmdb.org/t/p/w${w}/${path}`;

export async function getMovies() {  
  return axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
};

export async function searchMoviesByName(name) {  
  return axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${name}`);
};

export async function getMovieDetails(id) {  
  return axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
};

export async function getMovieCredits(id) {  
  return axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
};

export async function getMovieReviews(id) {  
  return axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`);
};