import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineThumbUp } from "react-icons/md";

const Card = ({ result }) => {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-red-400 sm:shadow-md rounded-lg sm:border sm:border-red-500 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          height={300}
          width={500}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          placeholder="blur"
          blurDataURL="/load.svg"
          alt="image not found"
          style={{ maxWidth: "100%", maxHeight: "auto" }}
        ></Image>
        <div className="p-2">
          <p className="line-clamp-2 text-emerald-900">{result.overview}</p>
          <h2 className="truncate text-lg font-bold">
            {result.title || result.name}
          </h2>
          <p className="flex  items-center">
            {result.release_date || result.first_air_date}
            <MdOutlineThumbUp className="h-5 mr-1 ml-3 " />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
