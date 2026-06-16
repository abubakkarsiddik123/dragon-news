import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { getNewsDatailsById } from "@/lib/data";


export const generateMetadata = async({params})=>{
    const {id}= await params;
    const news = await getNewsDatailsById(id)

    return{
        title:news.title,
        description:news.details
    }
}


const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsDatailsById(id);
//   console.log(news, "news dateils");
  return (
    <div className="max-w-4xl mx-auto my-8">
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <figure>
            <Image
              src={news.image_url}
              alt={news.title}
              height={300}
              width={300}
              className="w-full"
            />
          </figure>
          <h2 className="card-title">{news.title}</h2>
          <p>{news.details}</p>
          <Link href={`/category/${news.category_id}`}>
            <button className="btn bg-red-500 text-white">
              <FaArrowLeft /> All news in this category
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
