import { notFound } from 'next/navigation'
import authors from '@/data/authors.json'
import Breadcrumb from '@/app/components/Breadcrumb'
import HeroSection from '@/app/components/HeroSection'
import CustomButton from '@/app/components/CustomButton'
import BlogList from '@/app/componenets-global/BlogList'
import AuthorBox from '@/app/componenets-global/AuthorBox'

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const authorSlug = resolvedParams.slug;
  const author = authors[authorSlug as keyof typeof authors];

  if (!author) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <HeroSection 
        title={`${author.fullName} - Insights and Expertise on Car VIN Decoding`}
        description={`Explore the work of ${author.fullName} on ChassisVIN.com, where they share expert insights on car VIN decoding, including tips, guides, and detailed information to help you understand vehicle identification, car history, and more.`}
        showForm={false}
      />
      <div>
        <div className="space-y-8 w-full py-6 px-4">
          <div className="container">
            <Breadcrumb />
            <AuthorBox authorName={author.fullName}/>
          </div>

          <section className="max-w-4xl mx-auto pt-8 px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Latest Articles by {author.fullName}
            </h2>
            <BlogList
              showPagination={false} 
              author={author.fullName} 
              limit={6} 
            />
            <div className="mt-12 text-center">
              <CustomButton href='/blogs' text='View All Articles' />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}