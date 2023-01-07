import React from 'react';
import Movie from "./Movie";
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

interface RowProps {
    id: string
    title: string
    movies: any[]
}

const Row = ({movies, id, title}: RowProps) => {


    const slideLeft = () => {
        let slider = document.getElementById("slider" + id)
        slider!.scrollLeft = slider!.scrollLeft - 500
    }

    const slideRight = () => {
        let slider = document.getElementById("slider" + id)
        slider!.scrollLeft = slider!.scrollLeft + 500
    }

    return (
        <>
            <h2 className="text-white font-bold md:text-xl p-4">
                {title}
            </h2>
            <div className="relative flex items-center group">
                <MdChevronLeft
                    onClick={slideLeft}
                    className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
                    size={40}/>
                <div id={"slider" + id} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                    {movies.map((item, id) => (
                        <Movie key={item.emsId} item={item}/>
                    ))}
                </div>
                <MdChevronRight
                    onClick={slideRight}
                    className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
                    size={40}
                />
            </div>
        </>
    );
};

export default Row;