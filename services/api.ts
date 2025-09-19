export const TMDB_CONFIG = {
    BASE_URL: "https://api.themoviedb.org/3",
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
    }
}

export const fetchMovies = async ({query}: {query: string}) => {
    const endpoint = query?
    `/search/movie?query=${encodeURIComponent(query)}`
    :`/discover/movie?sort_by=popularity.desc`;
    const res = await fetch(`${TMDB_CONFIG.BASE_URL}${endpoint}`, {
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    })
    // console.error(res); // Debugging line

    if(!res.ok) {
        console.error(`fetchMovies-Error: ${res.status} - ${res.statusText}`);
        throw new Error('Failed to fetch movies');
    }
    const data = await res.json();
    // console.log('Movies data:', data); // Debugging line
    return data.results;
        
}