export interface Section {
    heading: string;
    headingLevel?: string;
    content: string;
}

export interface DataSource {
    source: string;
    prefix: string;
}

export interface HeroCta {
    text: string;
    link: string;
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface Author {
    name: string;
    url: string;
}

export interface Content {
    title: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
    canonical?: string;
    imageUrl?: string;
    seo?: string[];
    author?: Author;
    datePublished: string;
    dateModified: string;
    dataSources?: DataSource[];
    reportType?: string;
    heroForm?: boolean;
    heroCta?: HeroCta[];
    tags?: string[];
    sections: Section[];
    faqs: FAQItem[];
}

export interface RepetitivePageProps {
    contents: { [key: string]: Content };
    params: { page: string; make?: string };
}