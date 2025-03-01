interface PageDate {
    datePublished: string;
    dateModified: string;
  }
  
  interface PageDates {
    [key: string]: PageDate;
  }
  
  export const pageDates: PageDates = {
    '/': {
      datePublished: '2024-10-21',
      dateModified: '2025-03-02',
    },
    '/about-us': {
      datePublished: '2024-11-01',
      dateModified: '2025-03-02',
    },
    '/contact-us': {
        datePublished: '2024-10-21',
        dateModified: '2025-03-02',
      },
    '/privacy': {
      datePublished: '2024-12-22',
      dateModified: '2025-03-02',
    },
    '/terms': {
      datePublished: '2024-12-22',
      dateModified: '2025-03-02',
    },
    '/unlimited-vin-reports': {
      datePublished: '2024-12-22',
      dateModified: '2025-03-02',
    },
    '/window-sticker': {
      datePublished: '2024-12-22',
      dateModified: '2025-03-02',
    },
    // Add more pages as needed
  };
  
  export function getPageDates(path: string): PageDate | null {
    return pageDates[path] || null;
  }
  
  