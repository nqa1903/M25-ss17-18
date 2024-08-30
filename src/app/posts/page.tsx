import React from "react";
import Image from "next/image";
import type { Metadata } from 'next'
import Breadcrumbs from "../../../components/Breadcrumbs";


interface Post {
  id: number;
  title: string;
  thumbnailUrl: string;
  author : string;
  publishedDate: string; 
}

export const metadata: Metadata = {
    title: 'Danh sách bài viết',
    description: 'Trang buôn rượu chuẩn Texas',
    keywords: ["rượu" , "beyonce" , "texas"],
}

export default function Post() {
  const posts: Post[] = [
    {
      id: 1,
      title: "Post A",
      thumbnailUrl: "https://www.sirdavis.com/sites/default/files/2024-08/sd-homepage-brown-derby-small.png",
      author:"Beyonce",
      publishedDate: new Date().toISOString(),
    },
    {
      id: 2,
      title: "Post B",
      thumbnailUrl: "https://www.sirdavis.com/sites/default/files/2024-08/sd-homepage-brown-derby-small.png",
      author:"Tina",
      publishedDate: new Date().toISOString(),
    },
    {
      id: 3,
      title: "Post C",
      thumbnailUrl: "https://www.sirdavis.com/sites/default/files/2024-08/sd-homepage-honey-bee-small_2.png",
      author:"Tuner",
      publishedDate: new Date().toISOString(),
    },
    {
      id: 4,
      title: "Post D",
      thumbnailUrl: "https://www.sirdavis.com/sites/default/files/2024-08/sd-homepage-texas-buckin%27-small.png",
      author:"Blue",
      publishedDate: new Date().toISOString(),
    },
    {
      id: 5,
      title: "Post E",
      thumbnailUrl: "https://www.sirdavis.com/sites/default/files/2024-08/sd-homepage-the_houston-small.png",
      author:"Selena",
      publishedDate: new Date().toISOString(),
    },
    {
      id: 6,
      title: "Post H",
      thumbnailUrl: "https://www.sirdavis.com/sites/default/files/2024-07/HOMEPAGE_07.jpg",
      author:"Lorde",
      publishedDate: new Date().toISOString(),
    },
  ];

  return (
    <div className="p-6">
      <Breadcrumbs></Breadcrumbs>
      <h1 className="text-center text-2xl font-bold mb-8">Danh sách bài viết</h1>
      <div className="grid grid-cols-3 gap-6">
        {posts.map((post: Post) => (
          <div key={post.id} className="border rounded-lg p-4 shadow-md">
            <Image
              src={post.thumbnailUrl}
              alt={`Thumbnail of ${post.title}`}
              width={500}
              height={500}
              className="rounded-md"
            />
            <p className="text-center font-medium mt-2">{post.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
