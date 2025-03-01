import React from 'react'

interface ArticleSchemaProps {
  headline: string;
  description: string;
  authorName: string;
  authorUrl?: string;
  datePublished: string;
  dateModified: string;
  mainEntityOfPage: string;
  image: string;
  articleBody: string;
  publisherName?: string;
  publisherLogoUrl?: string;
}

const ArticleSchema: React.FC<ArticleSchemaProps> = ({
  headline,
  description,
  authorName = 'Ethan J. Caldwell',
  authorUrl = 'https://www.chassisvin.com/author/ethan',
  datePublished,
  dateModified,
  mainEntityOfPage,
  image,
  articleBody,
  publisherName = 'ChassisVin',
  publisherLogoUrl = 'https://www.chassisvin.com/ChassisVIN.png'
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    author: {
      '@type': 'Person',
      name: authorName,
      url: authorUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: publisherName,
      logo: {
        '@type': 'ImageObject',
        url: publisherLogoUrl,
      },
    },
    datePublished,
    dateModified,
    mainEntityOfPage,
    image,
    articleBody,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default ArticleSchema