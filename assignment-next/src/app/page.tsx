import Navbar from "@/components/navBar/Navbar";
import FirstPage from "@/components/pages/FirstPage";
import Footer from "@/components/pages/Footer";
import FormPage from "@/components/pages/FormPage";
import PacksPage from "@/components/pages/PacksPage";
import SecondPage from "@/components/pages/SecondPage";
import ThirdPage from "@/components/pages/ThirdPage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-5  gap-20 scroll-smooth">
      <Navbar/>
      <FirstPage/>
      <SecondPage/>
      <ThirdPage/>
      <PacksPage/>
      <FormPage/>
      <Footer/>
    </main>
  );
}
