import { notFound } from 'next/navigation'
import { generateMetadataHelper } from "../componenets-global/MetaGenerator"
import type { Metadata } from "next"
import Breadcrumb from '../components/Breadcrumb'
import UrlList from './url-list'
import FAQBasic from './FAQBasic'
import ServiceList from './ServiceList'
import ClassicYmmSpecs from '../components/ClassicYmmSpecs'
import SourceAndPartner from './SourceAndPartner'
import CheckOurBlog from '../components/CheckOurBlog'
import SectionCta from '../components/SectionCta'
import AuthorBox from './AuthorBox'
import CustomButton from '../components/CustomButton'
import { PageNavigation } from './PageNavigation'
import SiteForm from './SiteForm'
import styles from './RepetitivePage.module.css'
import ArticleSchema from './ArticleSchema'
import HeroSection from '../components/HeroSection'
import { Content, RepetitivePageProps, Section } from './contentTypes';
import { getBaseUrl } from './defaults';

function getCanonicalUrl(content: Content, key: string, parent: string): string {
  // console.log("key: ", key, " Parent: ", parent)
  const baseUrl = getBaseUrl()
  
  // Build the path with parent if provided
  let path = key
  if (parent != "-") {
    path = `${parent}/${key}`
  }
  
  return content.canonical || `${baseUrl}/${path}`
}

function getContent(contents: { [key: string]: Content }, key: string): Content | null {
  return contents && contents[key] ? contents[key] : null
}

export function generateMetadata({ contents, params }: Pick<RepetitivePageProps, "contents" | "params">): Metadata {
  const key = params.make || params.page
  // console.log("params: ", params)

  const parent = params.make != null ? params.page : "-"
  const content = getContent(contents, key)
  if (!content) return {}

  const canonicalUrl = getCanonicalUrl(content, key, parent)

  return generateMetadataHelper({
    metaTitle: content.metaTitle,
    metaDescription: content.metaDescription,
    canonical: canonicalUrl,
    title: content.title,
    description: content.description,
    imageUrl: content.imageUrl,
    seo: content.seo,
    author: content.author,
  })
}

export default function RepetitivePage({ contents, params }: RepetitivePageProps) {
  const key = params.make || params.page
  const parent = params.page
  const content = getContent(contents, key)

  if (!content) {
    notFound()
  }

  const renderSection = (section: Section, index: number) => {
    if (section.headingLevel === 'CTA') {
      return (
        <div className="content my-6" key={index}>
          <SectionCta text={section.heading} href={section.content} />
        </div>
      )
    }

    return (
      <div className="content py-2" key={index}>
        {renderHeading(section)}
        <div className={styles.sectionContent} dangerouslySetInnerHTML={{ __html: section.content }} />
    </div>
    )
  }

  const renderHeading = (section: Section) => {
    switch (section.headingLevel) {
      case "h3":
        return <h3 className='heading-3 mb-2'>{section.heading}</h3>
      case "h4":
        return <h4 className='heading-4 mb-2'>{section.heading}</h4>
      case "CTA":
        return null
      case "h2":
      default:
        return <h2 className='heading-2 mb-2'>{section.heading}</h2>
    }
  }

  // default value
  const tags = content.tags || ["service"]

  const showClassicYmmSpecs = tags.some(tag => tag.toLowerCase().includes('spec'))
  const showSourceAndPartner = tags.some(tag => tag.toLowerCase().includes('partner'))
  const showServiceList = tags.some(tag => tag.toLowerCase().includes('service'))
  const showAuthorBox = tags.some(tag => tag.toLowerCase().includes('authorbox'))
  
  const style = process.env.SITE_NAME === "ChassisVIN" ? "cv" : process.env.SITE_NAME === "ToyotaVinDecoder" ? "tv" : "";
  
  const showArticleSchema = content.seo ? content.seo.some(tag => tag.toLowerCase().includes('article')) : false

  const canonicalUrl = getCanonicalUrl(content, key, parent)

  return (
    <>
      {showArticleSchema && (
        <ArticleSchema
          headline={content.title}
          description={content.description}
          {...(content.author?.name && { authorName: content.author.name })}
          {...(content.author?.url && { authorUrl: content.author.url })}
          datePublished={content.datePublished}
          dateModified={content.dateModified}
          mainEntityOfPage={canonicalUrl}
          image={content.imageUrl}
          articleBody={content.description}
        />
      )}
      <main>
        <HeroSection showForm={content.heroForm} title={content.title} description={content.description} reportType={content.reportType as 'VHR' | 'WS'} heroCta={content.heroCta} />
        <div className={`w-full bg-white contentContainer ${style === "cv" ? "py-12" : "py-8 px-4 md:px-8 mb-16 border"}`}>
          <div className='max-w-7xl mx-auto flex flex-col lg:flex-row gap-8'>
            {/* LEFT SIDE */}
            <div className='contentContainer w-full lg:w-3/4'>
              <Breadcrumb />

              {content.sections && content.sections.length > 0 && content.sections.map((section, index) => renderSection(section, index))}

              {showClassicYmmSpecs && <ClassicYmmSpecs />}

              {showSourceAndPartner && <SourceAndPartner />}
              
              {content.dataSources && content.dataSources.length > 0 && content.dataSources.map((dataSource, index) => (
                dataSource.source && dataSource.source.trim() !== "" && (
                  <UrlList 
                  key={`${dataSource.source}-${index}`}
                  dataSource={dataSource.source} 
                  urlPrefix={dataSource.prefix} 
                  />
                )
              ))}
              
              {showServiceList && <ServiceList />}
              
              {showAuthorBox && <AuthorBox authorName='Ethan J. Caldwell' />}
              
              {content.faqs && content.faqs.length > 0 && (
                <FAQBasic title="Frequently Asked Questions" items={content.faqs} />
              )}
              <CheckOurBlog />
            </div>

            {/* RIGHT SIDE */}
            <div className='w-full hidden lg:block lg:w-1/4'>
              <div className="w-full bg-white py-6 px-3 sticky top-0">
                <div className="mb-6">
                  <div className="relative">
                    {content.reportType === 'COLOR' ? (
                      <>
                        <p className="text-lg font-semibold mb-2">Let&apos;s Find Your Color Code</p>
                        <p className="text-sm text-gray-600 mb-4">Need your car&apos;s color code? Enter your VIN, and we&apos;ll find the perfect match for you.</p>
                        <CustomButton text="Check Colors" href="#" fullWidth={true} />
                      </>
                    ) : (
                      <SiteForm forceMobileLayout={true} />
                    )}
                  </div>
                </div>
                <PageNavigation />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}