
import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";

const NewsCategory = async ({ params }) => {
  const { id } = await params;
  const categories = await getCategories();
  const news = await getNewsByCategoryId(id);

  return (
    <div className="container mx-auto px-4 my-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <div className="lg:col-span-3">
          <LeftSideBar categories={categories} activeId={id} />
        </div>

        {/* Main Content */}
        <div className="lg:col-span-6">
          <h2 className="font-bold text-lg mb-6">
            Dragon News Home
          </h2>

          <div className="space-y-4">
            {news.length > 0 ? (
              news.map((n) => (
                <NewsCard key={n._id} news={n} />
              ))
            ) : (
              <h2 className="font-bold text-2xl md:text-4xl text-center my-7">
                No News Found
              </h2>
            )}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-3">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default NewsCategory;