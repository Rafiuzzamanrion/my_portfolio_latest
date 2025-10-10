import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet="utf-8" />

          {/* Primary Meta Tags */}
          <meta
            name="title"
            content="MD. Rafiuzzaman Rion - Full-Stack Developer | MERN Stack Expert"
          />
          <meta
            name="description"
            content="Full-Stack Developer from Dhaka, Bangladesh specializing in Next.js, React.js, Node.js, Express.js, and MongoDB. Building scalable web applications with modern technologies and delivering enterprise solutions."
          />
          <meta
            name="keywords"
            content="full stack developer, MERN stack developer, Next.js developer, React.js developer, Node.js developer, Express.js, MongoDB, TypeScript, JavaScript developer, Dhaka Bangladesh, web developer, software engineer, Rafiuzzaman"
          />
          <meta name="author" content="MD. Rafiuzzaman" />
          <meta name="robots" content="index, follow" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="7 days" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.rafiuzzamanrion.me/" />
          <meta
            property="og:title"
            content="MD. Rafiuzzaman Rion - Full-Stack Developer | MERN Stack Expert"
          />
          <meta
            property="og:description"
            content="Full-Stack Developer specializing in Next.js, React.js, Node.js, and MongoDB. Building scalable enterprise web applications with modern technologies."
          />
          <meta
            property="og:image"
            content="https://www.rafiuzzamanrion.me/img/og-image.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content="MD. Rafiuzzaman Portfolio" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://www.rafiuzzamanrion.me/" />
          <meta
            name="twitter:title"
            content="MD. Rafiuzzaman Rion - Full-Stack Developer | MERN Stack Expert"
          />
          <meta
            name="twitter:description"
            content="Full-Stack Developer specializing in Next.js, React.js, Node.js, and MongoDB. Building scalable enterprise web applications."
          />
          <meta
            name="twitter:image"
            content="https://www.rafiuzzamanrion.me/img/twitter-image.jpg"
          />

          {/* Canonical URL */}
          <link rel="canonical" href="https://www.rafiuzzamanrion.me/" />

          {/* Favicon */}
          <link rel="shortcut icon" href="/img/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />

          {/* Manifest */}
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="theme-color" content="#0ea5e9" />

          {/* Google Fonts - Optimized Loading */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Barlow:wght@100;200;300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&family=Comfortaa:wght@300;400;500;600;700&family=Barlow+Condensed:wght@200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />

          {/* Structured Data - Person Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "MD. Rafiuzzaman Rion",
                url: "https://www.rafiuzzamanrion.me",
                image: "https://www.rafiuzzamanrion.me/img/profile.jpg",
                jobTitle: "Full-Stack Developer",
                description: "Full-Stack Developer specializing in MERN stack, Next.js, React.js, Node.js, and modern web technologies. Experienced in building enterprise-level applications.",
                email: "rafiujjaman5683@gmail.com",
                telephone: "+8801751073892",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Dhaka",
                  addressCountry: "Bangladesh"
                },
                sameAs: [
                  "https://github.com/RafiuzzamanRion",
                  "https://www.linkedin.com/in/rafiuzzaman-rion-ba3575291/",
                  "https://www.rafiuzzamanrion.me"
                ],
                knowsAbout: [
                  "JavaScript",
                  "TypeScript",
                  "Next.js",
                  "React.js",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "PostgreSQL",
                  "MySQL",
                  "Redux",
                  "Tailwind CSS",
                  "Prisma",
                  "Mongoose",
                  "REST API",
                  "JWT Authentication",
                  "NextAuth",
                  "Firebase",
                  "Web Development",
                  "Full Stack Development",
                  "MERN Stack"
                ],
                alumniOf: {
                  "@type": "CollegeOrUniversity",
                  name: "World University of Bangladesh"
                }
              }),
            }}
          />

          {/* Structured Data - Website Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "MD. Rafiuzzaman Rion - Portfolio",
                url: "https://yourwebsite.com",
                description: "Professional portfolio showcasing full-stack web development projects, skills, and experience in MERN stack technologies",
                author: {
                  "@type": "Person",
                  name: "MD. Rafiuzzaman Rion",
                },
              }),
            }}
          />

          {/* Structured Data - Professional Service */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "MD. Rafiuzzaman - Full-Stack Development Services",
                description: "Professional full-stack web development services specializing in MERN stack, Next.js, React.js, and enterprise applications",
                provider: {
                  "@type": "Person",
                  name: "MD. Rafiuzzaman Rion",
                },
                areaServed: {
                  "@type": "Country",
                  name: "Bangladesh"
                },
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Web Development Services",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Full-Stack Web Development"
                      }
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "MERN Stack Development"
                      }
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Next.js Development"
                      }
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "React.js Development"
                      }
                    }
                  ]
                }
              }),
            }}
          />
        </Head>

        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;