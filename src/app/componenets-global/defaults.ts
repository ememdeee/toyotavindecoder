// Default values for the application
// This file centralizes all default values to ensure consistency

// Helper function to get environment variables with fallbacks
function getEnvVar(key: string, fallback: string): string {
    // Check if we're on the client side
    const isClient = typeof window !== 'undefined'
    
    // Use the appropriate environment variable prefix
    const prefix = isClient ? 'NEXT_PUBLIC_' : ''
    const fullKey = `${prefix}${key}`
    
    return process.env[fullKey] || fallback
  }
  
  // Site information
  export const getSiteName = () => getEnvVar('SITE_NAME', 'SiteName')
  export const getBaseUrl = () => getEnvVar('DOMAIN_NAME', 'https://www.domain.com')
  export const getPublisherLogoUrl = () => `${getBaseUrl()}${getEnvVar("PUBLISHER_LOGO", "/logo.png")}`
  
  // Author information
  export const getDefaultAuthorName = () => getEnvVar('OWNER_NAME', 'Author Name')
  export const getDefaultAuthorUrl = () => `${getBaseUrl()}${getEnvVar("OWNER_PAGE", "/author/url")}`
  
  // Media
  export const getDefaultImageUrl = () => `${getBaseUrl()}${getEnvVar("OG_IMAGE", "/global/default-og-image.png")}`

  // Media
  export const getDefaultThemeColor = () => getEnvVar('THEME_COLOR', 'red')

  // Indexability
  export const getDefaultIndexability = () => getEnvVar('SITE_INDEX', 'index')
  
  // Helper function to get a value with a fallback
  export function getValueWithDefault<T>(value: T | undefined | null, defaultGetter: () => T): T {
    return value !== undefined && value !== null ? value : defaultGetter()
  }
  
  // Commonly used defaults as an object (alternative approach)
  export const defaults = {
    siteName: getSiteName(),
    baseUrl: getBaseUrl(),
    publisherLogoUrl: getPublisherLogoUrl(),
    authorName: getDefaultAuthorName(),
    authorUrl: getDefaultAuthorUrl(),
    imageUrl: getDefaultImageUrl(),
    themeColor: getDefaultThemeColor(),
    indexability: getDefaultIndexability(),
  }