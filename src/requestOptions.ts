const key = "699f3a71e5msh05c0e5e812bdbcep141f0bjsne9fde2cbf7e2"

export const requestOptions = {
    optionPopularity: {
        method: 'GET',
        url: 'https://flixster.p.rapidapi.com/movies/get-popularity',
        params: {zipCode: '90002', radius: '50'},
        headers: {
            'X-RapidAPI-Key': key,
            'X-RapidAPI-Host': 'flixster.p.rapidapi.com'
        }
    },
    optionUpcoming: {
        method: 'GET',
        url: 'https://flixster.p.rapidapi.com/movies/get-upcoming',
        params: {countryId: 'usa', limit: '100'},
        headers: {
            'X-RapidAPI-Key': key,
            'X-RapidAPI-Host': 'flixster.p.rapidapi.com'
        }
    },

    optionOpening: {
        method: 'GET',
        url: 'https://flixster.p.rapidapi.com/movies/get-opening',
        params: {countryId: 'usa'},
        headers: {
            'X-RapidAPI-Key': key,
            'X-RapidAPI-Host': 'flixster.p.rapidapi.com'
        }
    }
}