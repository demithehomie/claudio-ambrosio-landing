import React from "react";
import { Helmet } from "react-helmet";

// Import UI Components
import FloatingNavigation from "../../components/ui/FloatingNavigation";
import StickyWhatsAppCTA from "../../components/ui/StickyWhatsAppCTA";
import ProgressIndicator from "../../components/ui/ProgressIndicator";

// Import Page Components
import HeroSection from "./components/HeroSection";
import CredentialsSection from "./components/CredentialsSection";
import ProblemAgitationSection from "./components/ProblemAgitationSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ClinicsSection from "./components/ClinicsSection";
import FinalConversionSection from "./components/FinalConversionSection";
import FooterSection from "./components/FooterSection";

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>
          Dr. Cláudio Ambrósio - Endocrinologista | Transforme sua Saúde
        </title>
        <meta
          name="description"
          content="Endocrinologista com 30+ anos de experiência internacional. Especialista em reposição hormonal, emagrecimento inteligente e medicina preventiva. Agende sua consulta."
        />
        <meta
          name="keywords"
          content="endocrinologista, reposição hormonal, emagrecimento, Dr. Cláudio Ambrósio, hormônios, medicina preventiva, Rio de Janeiro, São Paulo"
        />
        <meta name="author" content="Dr. Cláudio Ambrósio" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Dr. Cláudio Ambrósio - Endocrinologista Especialista"
        />
        <meta
          property="og:description"
          content="Transforme sua saúde com tratamentos personalizados. 30+ anos de experiência internacional em endocrinologia."
        />
        <meta property="og:image" content="/assets/images/dr-claudio-og.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Dr. Cláudio Ambrósio - Endocrinologista"
        />
        <meta
          property="twitter:description"
          content="Especialista em reposição hormonal e medicina preventiva. Agende sua consulta."
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Dr. Cláudio Ambrósio - Endocrinologia, Metabolismo e Medicina Preventiva",
            description:
              "Clínica especializada em endocrinologia, metabolismo, alergias e medicina preventiva.",
            url: "https://drclaudioambrosio.com.br",
            telephone: "+5532988940001",
            address: [
              {
                "@type": "PostalAddress",
                streetAddress: "Estrada do Joá, 3884 - Barra da Tijuca",
                addressLocality: "Rio de Janeiro",
                addressRegion: "RJ",
                postalCode: "22610-142",
                addressCountry: "BR",
              },
              {
                "@type": "PostalAddress",
                streetAddress: "Avenida Brasil, 471 - Jardim Paulista",
                addressLocality: "São Paulo",
                addressRegion: "SP",
                postalCode: "01431-000",
                addressCountry: "BR",
              },
              {
                "@type": "PostalAddress",
                streetAddress: "Rua Dr. Afonso Canêdo, 124 - Centro",
                addressLocality: "Muriaé",
                addressRegion: "MG",
                postalCode: "36880-000",
                addressCountry: "BR",
              },
              {
                "@type": "PostalAddress",
                streetAddress:
                  "Shopping Praia da Costa, 5º andar - Torre Leste (acesso lateral do cinema)",
                addressLocality: "Vila Velha",
                addressRegion: "ES",
                postalCode: "29101-010",
                addressCountry: "BR",
              },
            ],
            physician: {
              "@type": "Physician",
              name: "Dr. Cláudio Ambrósio",
              medicalSpecialty: [
                "Endocrinologia",
                "Metabolismo",
                "Medicina Preventiva",
                "Alergia e Imunologia",
              ],
            },
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Progress Indicator */}
        <ProgressIndicator />

        {/* Floating Navigation */}
        <FloatingNavigation />

        {/* Sticky WhatsApp CTA */}
        <StickyWhatsAppCTA
          phoneNumber="5521999999999"
          message="Olá Dr. Cláudio! Gostaria de agendar uma consulta para discutir meus objetivos de saúde e bem-estar."
        />

        {/* Main Content Sections */}
        <main>
          {/* Hero Section */}
          <HeroSection />

          {/* Credentials Section */}
          <CredentialsSection />

          {/* Problem Agitation Section */}
          <ProblemAgitationSection />

          {/* Services Section */}
          <ServicesSection />

          {/* Testimonials Section */}
          <TestimonialsSection />

          {/* Clinics Section */}
          <ClinicsSection />

          {/* Final Conversion Section */}
          <FinalConversionSection />
        </main>

        {/* Footer */}
        <FooterSection />
      </div>
    </>
  );
};

export default LandingPage;
