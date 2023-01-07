import {useEffect, useState} from "react";
import axios from "axios";
import {requestOptions} from "../requestOptions";

export function useFetching () {
    const [popularMovies, setPopularMovies] = useState<any[]>([])
    const [upcomingMovies, setUpcomingMovies] = useState<any[]>([])
    const [openingMovies, setOpeningMovies] = useState<any[]>([])

    const movie: any = popularMovies[Math.floor(Math.random() * popularMovies.length)]

    useEffect(() => {
        fetchPopular()
        fetchUpcoming()
    }, [])

    function fetchPopular() {
        axios.request(requestOptions.optionPopularity)
            .then(response => {
                setOpeningMovies(response.data.data.opening)
                setPopularMovies(response.data.data.popularity)
            })
            .catch(e => console.log(e))
    }

    function fetchUpcoming() {
        axios.request(requestOptions.optionUpcoming)
            .then(response => setUpcomingMovies(response.data.data.upcoming))
            .catch(e => console.log(e))
    }



    return {popularMovies, upcomingMovies, openingMovies, movie}
}