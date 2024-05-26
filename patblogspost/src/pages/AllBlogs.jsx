import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import myContext from '../context/myContext';
import Layout from '../Components/Layout';
import Image from '../assets/P3.png';

export const postsData = [
  {
    id: uuidv4(),
    date: '25 Sep 2023',
    author: 'Lash Ericsson',
    category: 'General ADHD',
    title: 'Thriving with ADHD: Stories of Resilience and Success',
    description:
      'Share inspiring stories and testimonials from individuals with ADHD who have overcome challenges, pursued their passions, and achieved personal and professional success, offering hope and encouragement to others on their ADHD journey.',
    image: Image,
  },
  {
    id: uuidv4(),
    date: '25 Sep 2023',
    author: 'Daniel Karlsson',
    category: 'Men ADHD',
    title: 'Navigating ADHD as an Adult Male: Tips for Success',
    description:
      'This post explores unique challenges faced by adult men with ADHD and offers practical tips and strategies for managing symptoms and thriving in various areas of life.',
    image: Image,
  },
  {
    id: uuidv4(),
    date: '25 Sep 2023',
    author: 'Jane Smith',
    category: 'Women ADHD',
    title: 'Emotional Regulation and ADHD: Coping Strategies for Women',
    description:
      'Examine the connection between ADHD and emotional dysregulation in women, providing insights into recognizing and managing intense emotions, impulsivity, and mood swings.',
    image: Image,
  },
  {
    id: uuidv4(),
    date: '25 Sep 2023',
    author: 'Maja Andersson',
    category: 'Kids ADHD',
    title: 'Helping Children with ADHD Build Self-Esteem and Confidence',
    description:
      'Explore the impact of ADHD on children\'s self-esteem and provide guidance on nurturing resilience, celebrating strengths, and cultivating a positive sense of self-worth in children with ADHD.',
    image: Image,
  },
  // Add more blog posts here
];

function AllBlogs() {
  const context = useContext(myContext);
  const { mode } = context;

  return (
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto max-w-7xl">
          {/* Top Heading */}
          <div className="mb-5">
            <h1 className="text-center text-2xl font-bold" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
              All Blogs
            </h1>
          </div>
          {/* Main Content */}
          <div className="flex flex-wrap justify-center -m-4 mb-5">
            {postsData.map((post) => (
              <div key={post.id} className="p-4 md:w-1/3">
                <div
                  style={{
                    background: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white',
                    borderBottom: mode === 'dark' ? '4px solid rgb(226, 232, 240)' : '4px solid rgb(30, 41, 59)',
                  }}
                  className={`h-full shadow-lg hover:-translate-y-1 cursor-pointer hover:shadow-gray-400 ${
                    mode === 'dark' ? 'shadow-gray-700' : 'shadow-xl'
                  } rounded-xl overflow-hidden`}
                >
                  {/* Blog Thumbnail */}
                  <img className="w-full" src={post.image} alt="blog" />
                  {/* Top Items */}
                  <div className="p-6">
                    {/* Blog Date */}
                    <h2
                      className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                      style={{ color: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)' }}
                    >
                      {post.date}
                    </h2>
                    {/* Blog Author */}
                    <h1
                      className="author-font text-sm font-bold text-gray-400 mb-3"
                      style={{ color: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)' }}
                    >
                      {post.author}
                    </h1>
                    {/* Blog Category */}
                    <h1
                      className="category-font text-lg font-bold text-gray-900 mb-3"
                      style={{ color: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)' }}
                    >
                      {post.category}
                    </h1>
                    {/* Blog Title */}
                    <h1
                      className="title-font text-lg font-bold text-gray-900 mb-3"
                      style={{ color: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)' }}
                    >
                      {post.title}
                    </h1>
                    {/* Blog Description */}
                    <p
                      className="leading-relaxed mb-3"
                      style={{ color: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)' }}
                    >
                      {post.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}

export default AllBlogs;
