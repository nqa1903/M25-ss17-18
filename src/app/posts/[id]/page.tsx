"use client";
import React from "react";
import { useParams } from "next/navigation";
import Breadcrumbs from "../../../../components/Breadcrumbs";

interface Post {
  id: number;
  title: string;
  author: string;
  publishedDate: string;
}

export default function PostDetail() {
  const { id } = useParams();
  const post: Post = {
    id: Number(id),
    title: `Post ${id}`,
    author: `Author of post ${id}`,
    publishedDate: `Published`,
  };

  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "Article",
    title: post.title,
    description: `Content of the article : ${post.title}`,
    publishedDate: post.publishedDate,
  };

  return (
    <div className="p-6">
      <Breadcrumbs />
      <p className="mt-4">{`Chi tiết bài viết có id = ${post.id}`}</p>
      <script type="application/ld+json" />
    </div>
  );
}
