

import React, { useEffect, useState } from "react";
import axios from "axios";
import { getstoredata } from "../../json/fetchData"; // ✅ using fetchData.js

import HeroSectionBlog from "../../component/HeroSectionBlog/HeroSectionBlog";
import CurvedSection from "../../component/CurvedSection/CurvedSection";
import TopicScroller from "../../component/TopicScroller/TopicScroller";
import BlogCard from "../../component/BlogCard/BlogCard";
import BlogCardList from "../../component/BlogCardList/BlogCardList";

const BACKEND_URL = "https://safesite-backend.vercel.app/api/blogs";

const ResourceBlog = () => {
  const [backendData, setBackendData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [localData, setLocalData] = useState(null);

  // ✅ Get data from localStorage (via fetchData.js)
  useEffect(() => {
    const data = getstoredata();
    setLocalData(data);
  }, []);

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
        console.error("❌ Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading || !localData)
    return <p style={{ textAlign: "center" }}>Loading...</p>;

  // ✅ Safe local fallbacks — avoid undefined errors
  const localHeroData = localData?.["20"]?.["1"] || {};
  const localBlogPosts = localData?.["20"]?.["2"]?.posts || [];
  const localBlogList = localData?.["20"]?.["3"]?.blogList || [];

  // ✅ Merge backend data safely
  const mergedHero = {
    ...localHeroData,
    HeroImage: backendData?.featured?.image || localHeroData.HeroImage,
    HeroTag: backendData?.featured?.tag || localHeroData.HeroTag,
    HeroReadTime:
      backendData?.featured?.readTime || localHeroData.HeroReadTime,
    HeroTitle: backendData?.featured?.title || localHeroData.HeroTitle,
    HeroDescription:
      backendData?.featured?.description || localHeroData.HeroDescription,
    HeroAuthor: backendData?.featured?.author || localHeroData.HeroAuthor,
    HeroDate: backendData?.featured?.date || localHeroData.HeroDate,
  };

  const mergedBlogPosts =
    backendData?.posts?.length > 0 ? backendData.posts : localBlogPosts;

  const mergedBlogList =
    backendData?.blogList?.length > 0 ? backendData.blogList : localBlogList;

  // ✅ Render safely
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
