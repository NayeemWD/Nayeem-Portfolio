import "./App.css";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact ";
import Footer from "./Components/Footer";
import Navber from "./Components/Navber";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import Skills from "./Components/Skills";

function App() {
  return (
    <>
      <div className="bg-[#ecf0f3] w-full">
      {/* <div className=" w-full"> */}
        <Navber />
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-20 xl:px-72 mx-auto">
          <Banner />
          <hr className="border-t border-[#dce1e4]" />
          <Skills />
          <hr className="border-t border-[#dce1e4]" />
          <Projects />
          <hr className="border-t border-[#dce1e4]" />
          <Resume />
          <hr className="border-t border-[#dce1e4]" />
          <Contact />
          <hr className="border-t border-[#dce1e4]" />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

508.73 * 697.7;
