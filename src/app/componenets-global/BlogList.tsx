import blogs from '@/data/blogs.json';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Script from 'next/script';
import Image from 'next/image';
import CustomButton from '../components/CustomButton';
import { 
  defaults, 
  getValueWithDefault, 
  getDefaultAuthorName, 
  getDefaultAuthorUrl, 
  getDefaultImageUrl, 
  getBaseUrl, 
  getSiteName 
} from '@/app/componenets-global/defaults';
import { Content } from './contentTypes';

interface BlogsData {
  [slug: string]: Content;
}

interface BlogListProps {
  limit?: number;
  page?: number;
  showPagination?: boolean;
  author?: string;
}

export default function BlogList({ 
  limit = 9,
  page = 1,
  showPagination = true,
  author= 'all'
}: BlogListProps) {
  // Type assertion to tell TypeScript about the structure
  const typedBlogs = blogs as BlogsData;
  const blogEntries = Object.entries(typedBlogs);

  const defaultAuthor = getDefaultAuthorName();

  // Filter blogs by author if specified
  const filteredBlogs = author === 'all' 
  ? blogEntries 
  : blogEntries.filter(entry => 
      entry[1].author?.name === author || 
      (!entry[1].author && author === defaultAuthor)
    );

  const totalPages = Math.ceil(filteredBlogs.length / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const currentPageBlogs = filteredBlogs.slice(startIndex, endIndex);

  // Generate schema markup for each blog post
  const schemaMarkup = currentPageBlogs.map(([slug, blog]) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": blog.title,
    "description": blog.description,
    "author": {
      "@type": "Person",
      "name": getValueWithDefault(blog.author?.name, getDefaultAuthorName),
      "url": getValueWithDefault(blog.author?.url, getDefaultAuthorUrl)
    },
    "publisher": {
      "@type": "Organization",
      "name": getSiteName(),
      "logo": {
        "@type": "ImageObject",
        "url": defaults.publisherLogoUrl
      }
    },
    "datePublished": blog.datePublished,
    "dateModified": blog.dateModified,
    "mainEntityOfPage": `${getBaseUrl()}/blogs/${slug}`,
    "image": blog.imageUrl ? `${blog.imageUrl}` : `${getDefaultImageUrl()}`,
    "articleBody": blog.description
  }));

  return (
    <>
      <div className="space-y-8">
      {filteredBlogs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No related posts found.</p>
        </div>
      ) : (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPageBlogs.map(([slug, blog]) => (
          <div 
          key={slug}
          className="relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col h-full"
        >
            <Link 
              href={`/blogs/${slug}`}
              className="relative h-48 w-full block"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={getValueWithDefault(blog.imageUrl, getDefaultImageUrl) || "/placeholder.svg"}
                  alt={blog.title}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </Link>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow space-y-4">
                  <Link href={`/blogs/${slug}`} className="block">
                    <h2 className="text-xl font-semibold text-gray-900 line-clamp-2 leading-tight">
                      {blog.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                    {blog.description}
                  </p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <Link 
                    href={getValueWithDefault(blog.author?.url, getDefaultAuthorUrl)} 
                    className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200"
                  >
                    By {getValueWithDefault(blog.author?.name, getDefaultAuthorName)}
                  </Link>
                  <span className="text-sm text-gray-500">
                    {new Date(blog.datePublished).toLocaleDateString()}
                  </span>
                </div>
                <div className="mt-5">
                  <Link 
                    href={`/blogs/${slug}`}
                    className="inline-flex items-center text-sm font-medium border border-blue-600 text-blue-600 hover:text-white transition-all duration-300 ease-in-out px-3 py-2 rounded-md hover:bg-blue-600"
                  >
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {limit <= 3 && (
          <div className="text-center mt-8">
            <CustomButton
              text="View All Blogs"
              href="/blogs"
            />
          </div>
        )}

        {showPagination && totalPages > 1 && (
          <div className="flex justify-center gap-2 pt-4">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <Link
                key={pageNum}
                href={`/blogs?page=${pageNum}&limit=${limit}`}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200
                  ${pageNum === page 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                  }
                `}
              >
                {pageNum}
              </Link>
            ))}
          </div>
        )}
        </>
        )}
      </div>
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
    </>
  );
}