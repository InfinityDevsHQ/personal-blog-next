import Image from "next/image";
import { BlogPosts } from "../../../constants";

export default function BlogGrid2() {
  return (
    <div className="hidden md:block mx-auto px-4 md:px-0">
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-12 p-4 md:p-8 lg:p-12">
        {BlogPosts.map((post) => (
          <div key={post.id} className="flex flex-col hover:cursor-pointer">
            <Image
              width={1920}
              height={1080}
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover mb-2"
            />
            <div className="bg-black text-white inline-block px-2 py-1 mb-2 w-20">
              INSPIRE
            </div>
            <h3 className="font-bold text-lg mb-1">{post.title}</h3>
            <p className="text-paragraph text-xs">{post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
