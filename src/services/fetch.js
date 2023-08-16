import axios from "axios";

const Key = "717543402f8c4d4db47381dc7e978dcc";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

export async function homeApi() {
  const response = await axios.get(
    `/trending/movie/week?api_key=${Key}&page=1&language=en-US&include_adult=false`
  );
  return response.data.results;
}
export async function movieDetailsApi(movieId) {
  const response = await axios.get(`/movie/${movieId}?api_key=${Key}`);
  return response.data;
}

export async function movieApi(query) {
  const response = await axios.get(
    `/search/movie?api_key=${Key}&query=${query}&include_adult=false&language=en-US&page=1`
  );
  return response.data.results;
}

export async function movieCastApi(movieId) {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${Key}&language=en-US`
  );
  return response.data;
}

export async function movieReviewsApi(movieId) {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${Key}&language=en-US&page=1`
  );
  return response.data.results;
}
