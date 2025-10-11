import React from 'react';
import HeroSectionBlog from '../../component/HeroSectionBlog/HeroSectionBlog';
import data from '../../json/data.json';
import CurvedSection from '../../component/CurvedSection/CurvedSection';
import TopicScroller from '../../component/TopicScroller/TopicScroller';
import BlogCard from '../../component/BlogCard/BlogCard';
import BlogCardList from '../../component/BlogCardList/BlogCardList';

const ResourceBlog = () => {
  const resourceblog = data["20"]["1"];
  const blogPosts = data["20"]["2"].posts;
  const blogList = data["20"]["3"].blogList;

  return (
    <div>
      <HeroSectionBlog data={resourceblog} />
      <TopicScroller />
      <BlogCard blogPosts={blogPosts} />
      <BlogCardList blogs={blogList} /> {/* Pass blogs dynamically */}
      <CurvedSection />
    </div>
  );
};

export default ResourceBlog;
