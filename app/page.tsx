import Contact from "@/components/contact/contact.component";
import Footer from "@/components/footer/footer.component";
import Header from "@/components/header/header.component";

export default function Home() {
  return [
    <Header />,
    <main>
      <Contact />
    </main>,
    <Footer />
  ];
}
