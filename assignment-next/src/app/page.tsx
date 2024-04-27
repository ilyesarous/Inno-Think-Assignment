import Navbar from "./navBar/Navbar";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-5 scroll-smooth">
      <Navbar/>
      <FirstPage/>
      <SecondPage/>
    </main>
  );
}
