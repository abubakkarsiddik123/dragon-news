import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import React from "react";

async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
}
async function getNewsByCategoryId(category_id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );
  const data = await res.json();
  return data.data;
}

const NewsCategory = async ({ params }) => {
    const { id } = await params;
  const categories = await getCategories();
  const news = await getNewsByCategoryId(id);
  console.log(news, "news"); 

return (
    <div className="grid grid-cols-12 gap-4 container mx-auto my-[60px]">
      <div className="col-span-3">
        <LeftSideBar categories={categories} activeId={id} />
      </div>
      <div className="font-bold bg-purple-100 col-span-6">
        Dragon News Home
        <div className="space-y-4">
          {news.length  >0 ? news.map((n) => {
            return (
              <div key={n._id} className="p-6 rounded-md border">
                {n.title}
              </div>
            );
          }) : <h2 className="font-bold text-4xl my-7 text-center">No News Found</h2>}
        </div>
      </div>
      <div className=" col-span-3">
        <RightSideBar />
      </div>
    </div>
  );
};

export default NewsCategory;
