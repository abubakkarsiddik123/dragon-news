import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Dragon News - Career",
};

const CareerPage = () => {
  const jobs = [
    { id: 1, title: "News Reporter", type: "Full Time", location: "Remote" },
    { id: 2, title: "Content Editor", type: "Full Time", location: "Hybrid" },
    { id: 3, title: "Frontend Developer", type: "Full Time", location: "Remote" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-14">

        {/* HERO */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Join the Dragon News Team
          </h1>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-lg">
            Build impactful journalism with a team that values accuracy,
            creativity, and innovation in digital news.
          </p>

          <div className="mt-6">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              We are hiring now 🚀
            </span>
          </div>
        </div>

        {/* WHY JOIN */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Work With Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Career Growth",
                desc: "Learn from industry experts and grow your skills faster.",
              },
              {
                title: "Strong Team",
                desc: "Work with talented journalists, editors, and engineers.",
              },
              {
                title: "Real Impact",
                desc: "Your work reaches millions of readers worldwide.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition duration-300 border border-gray-100"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* JOBS */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-10">
            Open Positions
          </h2>

          <div className="space-y-5">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 shadow-sm hover:shadow-md transition"
              >
                {/* LEFT */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {job.title}
                  </h3>

                  <p className="text-gray-500 mt-1">
                    {job.type} • {job.location}
                  </p>

                  <div className="flex gap-2 mt-3">
                    <span className="text-xs px-3 py-1 bg-gray-100 rounded-full">
                      {job.type}
                    </span>
                    <span className="text-xs px-3 py-1 bg-gray-100 rounded-full">
                      {job.location}
                    </span>
                  </div>
                </div>

                {/* RIGHT */}
                <Link
                  href={`/careers/${job.id}/apply`}
                  className="px-5 py-2.5 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CareerPage;