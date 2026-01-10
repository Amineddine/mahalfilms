import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    type?: 'website' | 'article';
}

export const SEO: React.FC<SEOProps> = ({
    title,
    description,
    canonical = 'https://mahalfilms.com',
    type = 'website'
}) => {
    const siteTitle = 'Mahal Films';
    const fullTitle = title === siteTitle ? siteTitle : `${title} | ${siteTitle}`;

    // Structured Data (Organization)
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Mahal Films",
        "url": "https://mahalfilms.com",
        "logo": "https://mahalfilms.com/mahalfilmslogo.png",
        "description": "Premier production service company in Morocco. Complete professional and logistical support for feature films and television.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Marrakech",
            "addressCountry": "MA"
        },
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "telephone": "+212-661-231031",
                "contactType": "customer service"
            }
        ]
    };

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonical} />
            <meta property="og:site_name" content={siteTitle} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />

            {/* JSON-LD Schema */}
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};
