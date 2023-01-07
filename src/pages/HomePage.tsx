import React from 'react';
import Main from "../components/Main";
import {useFetching} from "../hooks/useFetching";
import Row from "../components/Row";

const HomePage = () => {
    const {popularMovies, upcomingMovies, openingMovies, movie} = useFetching()


    return (
        <div>
            <Main movie={movie}/>
            <Row id="1" title="Most popular" movies={popularMovies}/>
            <Row id="2" title="Opening" movies={openingMovies}/>
            <Row id="3" title="Upcoming" movies={upcomingMovies}/>
        </div>
    );
};

export default HomePage;