import React from "react";

export const metadata = {
  title: "Dragon News - About Us",
};

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Dragon News
        </h1>
        <p className="text-gray-500 max-w-3xl mx-auto">
          Dragon News is dedicated to delivering accurate, timely, and
          trustworthy news to readers worldwide. We believe quality journalism
          empowers people with knowledge and awareness.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl">Our Mission</h2>
            <p>
              To provide reliable news and insightful stories that help people
              make informed decisions and stay connected with the world.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl">Our Vision</h2>
            <p>
              To become a leading digital news platform known for integrity,
              transparency, and excellence in journalism.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <h3 className="card-title justify-center">Accuracy</h3>
              <p>
                We carefully verify facts and ensure every story meets our
                editorial standards.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <h3 className="card-title justify-center">Integrity</h3>
              <p>
                We uphold honesty, transparency, and ethical journalism in all
                our reporting.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <h3 className="card-title justify-center">Innovation</h3>
              <p>
                We embrace technology to improve the way news is delivered and
                experienced.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">
          Dragon News in Numbers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <h3 className="text-5xl font-bold text-purple-600">50K+</h3>
              <p>Monthly Readers</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <h3 className="text-5xl font-bold text-purple-600">1000+</h3>
              <p>Published Articles</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <h3 className="text-5xl font-bold text-purple-600">24/7</h3>
              <p>News Coverage</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;