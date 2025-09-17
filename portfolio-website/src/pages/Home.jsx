import Header from "../components/Header";
import Intro from "../sections/Intro";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Work from "../sections/Work";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";

function Home() {
    return (
        <div className="w-screen bg-[#060816]">
            <Header/>
            <Intro/>
            <About/>
            <Projects/>
            {/* <Work/> */}
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;