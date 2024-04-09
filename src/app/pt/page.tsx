import Contact from "@/src/components/contact/contact.component";
import Experience from "@/src/components/experiences/experiences.component";
import Footer from "@/src/components/footer/footer.component";
import Header from "@/src/components/header/header.component";
import { useTranslations } from "next-intl";

export default function Home() {
  const tExperiences = useTranslations('experiences');
  const tShared = useTranslations('shared');

  return (
    <>
      <Header />
      <main>
        <Experience 
          title={tExperiences('title')}
          subtitle={tExperiences('subtitle')}
          downloadHere={tExperiences('downloadHere')}
          experiencesId={tShared('experiencesId')} />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
