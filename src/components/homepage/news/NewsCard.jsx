import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";

const NewsCard = ({ news }) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        {/* author info */}
        <div className="flex justify-between items-center bg-slate-100 p-4">
          <div className="flex gap-4 items-center">
            <Image
              src={news.author?.img}
              alt={news.title}
              width={40}
              height={40}
              className="rounded-full"
            />
             <div className="">
            <h2 className="font-bold">{news.author?.name}</h2>
            <p className="text-sm">{news.author?.published_date}</p>
          </div>
          </div>
         
          <div className="flex justify-between items-center">
            <CiBookmark className="text-xl"/>
            <CiShare2 className="text-xl"/>
          </div>
        </div>

        <h2 className="card-title">{news.title}</h2>
         <figure>
        <Image
          src={news.image_url}
          alt={news.title}
          height={300}
          width={300}
          className="w-full"
        />
      </figure>
      <p className="line-clamp-3">{news.details}</p>
      <div className="flex justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <h2 className="flex items-center gap-1"><MdOutlineStar className="text-yellow-500 text-lg" />  <MdOutlineStar className="text-yellow-500 text-lg" />  <MdOutlineStar className="text-yellow-500 text-lg" /> {news.rating.number}</h2>
          <h2 className="flex items-center gap-1"><FaEye /> {news.total_view}</h2>
        </div>
        <div className=""></div>
        <div className="">
          <Link href={`/news/${news._id}`}>
          <button className="btn">See Details</button>
          </Link>
        </div>
      </div>




      </div>
    </div>
  );
};

export default NewsCard;
