import contents from '@/data/pages.json'
import RepetitivePage, { generateMetadata as generateRepetitiveMetadata } from '@/app/componenets-global/RepetitivePage';

export default async function Page({ params }: { params: Promise<{ page: string }> }) {
  const resolvedParams = await params;
  
  return (
    <RepetitivePage
      contents={contents}
      params={resolvedParams}
    />
  )
}

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }) {
  const resolvedParams = await params;
  return generateRepetitiveMetadata({ contents, params: resolvedParams })
}

export async function generateStaticParams() {
  return Object.keys(contents).map(page => ({ page }))
}