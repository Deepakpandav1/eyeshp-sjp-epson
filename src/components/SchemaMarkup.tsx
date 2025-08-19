const SchemaMarkup = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalOrganization",
          name: "Dr. Preeti's Bright Eye Care Hospital",
          image: "https://drpreetisbrighteyecare.com/assets/images/logo.png",
          url: "https://drpreetisbrighteyecare.com",
          telephone: "+91-6239507877",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Durga Market, Chhoti Nehar to Sarna Road, Near Flyover",
            addressLocality: "Pathankot",
            addressRegion: "Punjab",
            postalCode: "145025",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 32.27,
            longitude: 75.65,
          },
          openingHours: "Mo-Sa 09:00-19:00",
          priceRange: "₹₹",
          sameAs: ["https://www.instagram.com/drpreetisbrighteyecarehospital/"],
        }),
      }}
    />
  );
};

export default SchemaMarkup;
