import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({
  title = "Dr. Preeti's Bright Eye Care Hospital | Best Eye Hospital in Pathankot",
  description = "India's leading eye hospital & Pathankot's first HOTA-approved center for corneal transplantation. Trusted eye specialists for cataract, retina, LASIK, and eye surgeries.",
  keywords = "Best eye hospital in Pathankot, HOTA approved eye hospital, corneal transplantation Pathankot, cataract surgery Pathankot, LASIK Pathankot, retina specialist Punjab, Dr Preeti's Bright Eye Care Hospital, eye hospital Pathankot, eye hospital Punjab, eye hospital Himachal, best eye doctor J&K, cataract surgery North India, LASIK Punjab, retina specialist Himachal, corneal transplant Jammu, Dr. Preeti eye clinic, eye specialist in North India",
  url = "https://drpreetisbrighteyecare.com",
  image = "https://drpreetisbrighteyecare.com/public/logo2.png",
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">{`
      {
        "@context": "https://schema.org",
        "@type": "Hospital",
        "name": "Dr. Preeti's Bright Eye Care Hospital",
        "description": "${description}",
        "image": "${image}",
        "url": "${url}",
        "telephone": "+91-6239507877",
        "email": "drpreetisbrighteyecare@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Durga Market, Chhoti Nehar to Sarna Road, Near Flyover",
          "addressLocality": "Pathankot",
          "addressRegion": "Punjab",
          "postalCode": "145025",
          "addressCountry": "IN"
        },
        "openingHours": "Mo-Su 09:00-20:00",
        "sameAs": [
          "https://www.facebook.com/",
          "https://www.instagram.com/",
          "https://www.linkedin.com/"
        ]
      }
      `}</script>
    </Helmet>
  );
};

export default SEO;
