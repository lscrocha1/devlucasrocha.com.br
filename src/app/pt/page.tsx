import AboutMe from "@/src/components/about-me/about-me.component";
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
  const tFooter = useTranslations('footer');
  const tHeader = useTranslations('header');

  function getLink(): string {
    const base = 'https://wa.me/5519993814321'
    const message = "Olá! Estou entrando em contato pelo seu site";
    return `${base}?text=${encodeURI(message)}`;
  }

  return (
    <>
      <Header
        experiencesId={tShared('experiencesId')}
        aboutMeId={tShared('aboutMeId')}
        contactId={tShared('contactId')}
        contentCreationId={tShared('contentCreationId')}
        aboutMeText={tHeader('aboutMe')}
        contactText={tHeader('contact')}
        experiencesText={tHeader('experiences')}
        contentCreationText={tHeader('contentCreation')} />
      <main>
        <AboutMe />
        <ContentCreation />
        <Experience 
          title={tExperiences('title')}
          subtitle={tExperiences('subtitle')}
          downloadHere={tExperiences('downloadHere')}
          experiencesId={tShared('experiencesId')} />
        <Contact />
        <WhatsappCTA whatsappLink={getLink()}/>
      </main>
      <Footer developedWith={tFooter('developedWith')} />
    </>
  )
}
