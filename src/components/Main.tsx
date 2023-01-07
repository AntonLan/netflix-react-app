import React from 'react';

interface MainProps {
    movie: any
}

const Main = ({movie}: MainProps) => {


    return (
        <div className="w-full h-[550px] text-white">
            <div className="w-full h-full">
                <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
                <img
                    className="w-full h-full object-cover"
                    src={movie?.posterImage.url}
                    alt={movie?.name}
                />
                <div className="absolute w-full top-[20%] p-4 md:p-8 font-bold">
                    <h1 className="text-3xl">
                        {movie?.name}
                    </h1>
                    <div className="my-4">
                        <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
                            Play
                        </button>
                        <button className="border text-white border-gray-300 ml-5 py-2 px-5">
                            Watch Later
                        </button>

                    </div>
                    <p className="text-gray-400 text-sm">
                        User rating: {movie?.userRating.dtlLikedScore}</p>
                </div>
            </div>
        </div>
    );
};

export default Main;