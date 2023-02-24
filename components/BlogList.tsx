import Image from "next/image";
import React from "react";
import urlFor from "../lib/urlFor";

type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {
  return (
    <div>
      <hr className="border-[#f7ab0a] mb-10" />
      <div>
        {posts.map((post) => (
          <div key={post._id} className='flex flex-col cursor-pointer group '>
            <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
              <Image
                className="object-cover object-left lg:object-center"
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                fill
              />
              <div>
                <div>
                  <p className="font-bold">

                  </p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
