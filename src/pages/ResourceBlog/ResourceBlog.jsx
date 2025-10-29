// import React from 'react';
// import HeroSectionBlog from '../../component/HeroSectionBlog/HeroSectionBlog';
// import data from '../../json/data.json';
// import CurvedSection from '../../component/CurvedSection/CurvedSection';
// import TopicScroller from '../../component/TopicScroller/TopicScroller';
// import BlogCard from '../../component/BlogCard/BlogCard';
// import BlogCardList from '../../component/BlogCardList/BlogCardList';

// const ResourceBlog = () => {
//   const resourceblog = data["20"]["1"];
//   const blogPosts = data["20"]["2"].posts;
//   const blogList = data["20"]["3"].blogList;

//   return (
//     <div>
//       <HeroSectionBlog data={resourceblog} />
//       <TopicScroller />
//       <BlogCard blogPosts={blogPosts} />
//       <BlogCardList blogs={blogList} /> {/* Pass blogs dynamically */}
//       <CurvedSection />
//     </div>
//   );
// };

// export default ResourceBlog;



import React, { useEffect, useState } from "react";
import axios from "axios";
import data from "../../json/data.json";

import HeroSectionBlog from "../../component/HeroSectionBlog/HeroSectionBlog";
import CurvedSection from "../../component/CurvedSection/CurvedSection";
import TopicScroller from "../../component/TopicScroller/TopicScroller";
import BlogCard from "../../component/BlogCard/BlogCard";
import BlogCardList from "../../component/BlogCardList/BlogCardList";

const BACKEND_URL = "https://safesite-backend.vercel.app/api/blogs"; // ✅ Adjust route to your backend

const ResourceBlog = () => {
  const [backendData, setBackendData] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Local fallback JSON data (ID: 20)
  const localHeroData = data["20"]["1"];
  const localBlogPosts = data["20"]["2"].posts;
  const localBlogList = data["20"]["3"].blogList;

  // ✅ Fetch from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(BACKEND_URL);
        const blog = res.data.find(
          (item) => item.page?.toLowerCase() === "resourceblog"
        );
        setBackendData(blog);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  if (!backendData)
    return (
      <p style={{ textAlign: "center" }}>
        No backend data found for page = "ResourceBlog". Please add it in Admin Panel.
      </p>
    );

  // ✅ Merge backend data with local fallback
  const mergedHero = {
    ...localHeroData,
    HeroImage: backendData.featured?.image || localHeroData.HeroImage,
    HeroTag: backendData.featured?.tag || localHeroData.HeroTag,
    HeroReadTime: backendData.featured?.readTime || localHeroData.HeroReadTime,
    HeroTitle: backendData.featured?.title || localHeroData.HeroTitle,
    HeroDescription:
      backendData.featured?.description || localHeroData.HeroDescription,
    HeroAuthor: backendData.featured?.author || localHeroData.HeroAuthor,
    HeroDate: backendData.featured?.date || localHeroData.HeroDate,
  };

  const mergedBlogPosts =
    backendData.posts?.length > 0 ? backendData.posts : localBlogPosts;

  const mergedBlogList =
    backendData.blogList?.length > 0 ? backendData.blogList : localBlogList;

  // ✅ Render final layout
  return (
    <div>
      <HeroSectionBlog data={mergedHero} />
      <TopicScroller />
      <BlogCard blogPosts={mergedBlogPosts} />
      <BlogCardList blogs={mergedBlogList} />
      <CurvedSection />
    </div>
  );
};

export default ResourceBlog;
