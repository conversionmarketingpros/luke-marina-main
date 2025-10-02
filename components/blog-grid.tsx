"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { blogPosts } from "@/lib/bolg-data"

export function BlogGrid() {
  const blogs = blogPosts.slice(0, 6) // Get all 6 blogs from the data file

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className=" mb-12">
          <p className="text-black text-3xl mb-4">
            Collection of my insights latest trends, tips, and thought-provoking
          </p>
          <h2 className="text-5xl lg:text-8xl font-bold text-[#106264] mb-8">Blogs</h2>
        </div>

        {/* Blog Cards Grid - 2 rows of 3 blogs each */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className="group bg-white animate-in fade-in-50 duration-500"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Blog Image */}
              <div className="relative w-full h-64 overflow-hidden rounded-lg">
                <Image
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Blog Content */}
              <div className="mt-4">
                {/* Title */}
                <h3 className="text-2xl font-bold text-black mb-3 tracking-[-3%] group-hover:text-[#106264] transition-colors">
                  {blog.title}
                </h3>

                {/* Author Info */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src={blog.author.image || "/placeholder.svg"}
                      alt={blog.author.name}
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="font-medium">{blog.author.name}</span>
                    <span>•</span>
                    <span>{blog.author.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  {blog.excerpt}
                </p>

                {/* View Blog Button */}
                <Link href={`/blog/${blog.slug}`}>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-black hover:text-[#106264] font-medium transition-colors relative group/button"
                  >
                    View Blog
                    <div className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-black group-hover/button:bg-[#106264] transition-colors mt-3"></div>
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
