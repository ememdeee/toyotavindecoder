import authors from '@/data/authors.json'
import HeroSection from '@/app/components/HeroSection'
import Breadcrumb from '@/app/components/Breadcrumb'
import BlogList from '../componenets-global/BlogList'
import AuthorBox from '../componenets-global/AuthorBox'
import { Metadata } from "next"
import { generateMetadataHelper } from '../componenets-global/MetaGenerator'

// This function generates the metadata for your page
export async function generateMetadata(): Promise<Metadata> {
  
  const content = {
    metaTitle: "Meet Our Expert Authors | Toyota VIN Decoder",
    metaDescription: "Discover the brilliant minds behind our insightful articles on car VIN decoding, vehicle history, and automotive expertise at Toyota VIN Decoder.",
    canonical: "https://www.toyotavindecoder.com/author", 
    title: "Meet Our Expert Authors | Toyota VIN Decoder",
    description: "Discover the brilliant minds behind our insightful articles on car VIN decoding, vehicle history, and automotive expertise at Toyota VIN Decoder.",
    type: "website" as const,
    seo: [],
  }

  // Use the helper function to generate metadata
  return generateMetadataHelper(content)
}

export default function AuthorListPage() {
  return (
    <div className="min-h-screen">
      <HeroSection 
        title="Meet Our Expert Authors"
        description="Discover the brilliant minds behind our insightful articles on car VIN decoding, vehicle history, and automotive expertise."
        showForm={false}
      />
      <div className='container py-8 px-4 space-y-12'>
        <Breadcrumb />
        <h2 className="text-3xl font-bold text-center !mt-0">Our Authors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(authors).map(([slug, author]) => (
            <AuthorBox key={slug} authorName={author.fullName}/>
          ))}
        </div>
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Latest Articles</h2>
          <BlogList showPagination={false} limit={6} />
        </section>
      </div>
    </div>
  )
}