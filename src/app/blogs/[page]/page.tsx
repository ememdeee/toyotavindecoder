import RepetitivePage, { generateMetadata as generateRepetitiveMetadata } from '@/app/componenets-global/RepetitivePage'
import contents from '@/data/blogs.json'

export default async function Page({ params }: { params: Promise<{ page: string }> }) {
  const resolvedParams = await params;
  
  // Create a new params object that matches what RepetitivePage expects
  const enhancedParams = {
    page: 'blogs',       // Set the static segment "blogs" as the page
    make: resolvedParams.page  // Set the dynamic segment as the make
  };
  
  return (
    <RepetitivePage
      contents={contents}
      params={enhancedParams}
    />
  )
}

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }) {
  const resolvedParams = await params;
  
  // Create a new params object that matches what RepetitivePage expects
  const enhancedParams = {
    page: 'blogs',       // Set the static segment "blogs" as the page
    make: resolvedParams.page  // Set the dynamic segment as the make
  };
  
  return generateRepetitiveMetadata({ contents, params: enhancedParams })
}

export async function generateStaticParams() {
  return Object.keys(contents).map(page => ({ page }))
}