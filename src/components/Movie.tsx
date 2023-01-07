import React, {useState} from 'react';
import {FaHeart, FaRegHeart} from "react-icons/fa";
import {useAuth} from "../hooks/useAuth";
import {db} from "../firebase"
import {arrayUnion, doc, updateDoc} from "firebase/firestore"

interface MovieProps {
    item: any
}

const Movie = ({item}: MovieProps) => {
    const [like, setLike] = useState(false)
    const [saved, setSaved] = useState(false)
    const {user} = useAuth()

    const movieId =  doc(db, "users", `${user?.email}`)

    const saveMovie = async () => {
        if (user?.email) {
            setLike(!like)
            setSaved(true)
            await updateDoc(movieId, {
                savedMovies: arrayUnion({
                    id: item.emsId,
                    title: item.name,
                    img: item.posterImage.url
                })
            })
        } else {
            alert("Please log in to save movie")
        }
    }

    return (
        <div className="w-[160px] h-[240px] sm:w-[200px] sm:h-[310px] md:w-[240px] md:h-[400px] lg:w-[280px] lg:h-[490px] inline-block cursor-pointer relative p-2">
            <img
                className='w-full h-auto block'
                src={item.posterImage.url}
                alt={item.name}
            />
            <div className="absolute top-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                    {item?.name}
                </p>
                <p onClick={saveMovie}>
                    {like ?
                        <FaHeart className="absolute top-4 left-4 text-gray-300"/>
                        :
                        <FaRegHeart className="absolute top-4 left-4 text-gray-300"/>}
                </p>
            </div>
        </div>
    );
};

export default Movie;