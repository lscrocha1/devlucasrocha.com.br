import Contact from "@/src/components/contact/contact.component";
import ContentCreation from "@/src/components/content-creation/content-creation.component";
import WhatsappCTA from "@/src/components/ctas/whatsapp/whatsapp.component";
import Experience from "@/src/components/experiences/experiences.component";
import Footer from "@/src/components/footer/footer.component";
import Header from "@/src/components/header/header.component";
import { useTranslations } from "next-intl";

export default function Home() {
  const tExperiences = useTranslations('experiences');
  const tShared = useTranslations('shared');

  function getLink(): string {
    const base = 'https://wa.me/5519993814321'
    const message = "Hello! I'm contacting you from your website";
    return `${base}?text=${encodeURI(message)}`;
  }

  return (
    <>
      <Header />
      <main>
        <ContentCreation />
        <Experience 
          title={tExperiences('title')}
          subtitle={tExperiences('subtitle')}
          downloadHere={tExperiences('downloadHere')}
          experiencesId={tShared('experiencesId')} />
        <Contact />
        <WhatsappCTA whatsappLink={getLink()} />
      </main>
      <Footer />
    </>
  );
}
