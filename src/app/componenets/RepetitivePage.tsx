import { notFound } from 'next/navigation'
import { generateMetadataHelper } from "./MetaGenerator"
import type { Metadata } from "next"
import HeroSection from './HeroSection'
import Breadcrumb from './Breadcrumb'
import UrlList from './url-list'
import FAQBasic from './FAQBasic'
import ServiceList from './ServiceList'
import ClassicYmmSpecs from './ClassicYmmSpecs'
import SourceAndPartner from './SourceAndPartner'
import CheckOurBlog from './CheckOurBlog'
import SectionCta from './SectionCta'
import AuthorBox from './AuthorBox'
import CustomButton from './CustomButton'
import { PageNavigation } from './PageNavigation'
import SiteForm from './SiteForm'
import styles from './RepetitivePage.module.css'
import ArticleSchema from './ArticleSchema'


interface Section {
  heading: string;
  headingLevel?: string;
  content: string;
}

interface DataSource {
  source: string;
  prefix: string;
}

interface HeroCta {
  text: string;
  link: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface Author {
  name: string;
  url: string;
}

interface Content {
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  imageUrl: string;
  seo: string[];
  author: Author;
  datePublished: string,
  dateModified: string,
  dataSources: DataSource[];
  reportType: string;
  heroForm: boolean;
  heroCta: HeroCta[];
  tags: string[];
  sections: Section[];
  faqs: FAQItem[];
}

interface RepetitivePageProps {
  contents: { [key: string]: Content };
  params: { page: string; make?: string };
}

function getContent(contents: { [key: string]: Content }, key: string): Content | null {
  return contents && contents[key] ? contents[key] : null
}

export function generateMetadata({ contents, params }: Pick<RepetitivePageProps, "contents" | "params">): Metadata {
  const key = params.make || params.page
  const content = getContent(contents, key)
  if (!content) return {}

  return generateMetadataHelper({
    metaTitle: content.metaTitle,
    metaDescription: content.metaDescription,
    canonical: content.canonical,
    title: content.title,
    description: content.description,
    imageUrl: content.imageUrl,
    seo: content.seo,
    author: content.author,
  })
}

export default function RepetitivePage({ contents, params }: RepetitivePageProps) {
  const key = params.make || params.page
  const content = getContent(contents, key)

  if (!content) {
    notFound()
  }

  const renderSection = (section: Section, index: number) => {
    if (section.headingLevel === 'CTA') {
      return (
        <div className="content px-4 my-6" key={index}>
          <SectionCta text={section.heading} href={section.content} />
        </div>
      )
    }

    return (
      <div className="content px-4 py-2" key={index}>
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

  const showClassicYmmSpecs = content.tags.some(tag => tag.toLowerCase().includes('spec'))
  const showSourceAndPartner = content.tags.some(tag => tag.toLowerCase().includes('partner'))
  const showServiceList = content.tags.some(tag => tag.toLowerCase().includes('service'))
  const showAuthorBox = content.tags.some(tag => tag.toLowerCase().includes('authorbox'))
  
  const style = process.env.SITE_NAME === "ChassisVIN" ? "cv" : process.env.SITE_NAME === "ToyotaVinDecoder" ? "tv" : "";
  
  const showArticleSchema = content.seo.some(tag => tag.toLowerCase().includes('article'))

  return (
    <>
      {showArticleSchema && (
        <ArticleSchema
          headline={content.title}
          description={content.description}
          authorName={content.author.name}
          authorUrl={content.author.url}
          datePublished={content.datePublished}
          dateModified={content.dateModified}
          mainEntityOfPage={content.canonical}
          image={content.imageUrl}
          articleBody={content.description}
        />
      )}
      <main>
        <HeroSection showForm={content.heroForm} title={content.title} description={content.description} reportType={content.reportType as 'VHR' | 'WS'} heroCta={content.heroCta} />
        <div className={`w-full bg-white contentContainer ${style === "cv" ? "py-12" : "py-8 md:px-4 mb-16 border"}`}>
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