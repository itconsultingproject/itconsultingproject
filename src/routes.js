import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Contactus from "./pages/Contactus";
import Strategic from "pages/Pages/Strategic";
import Cybersecurity from "pages/Pages/Cybersecurity";
import TechnologyImpl from "pages/Pages/TechnologyImpl";
import Datamanagment from "pages/Pages/DataManagment";
import Header from "./components/Navbar";
import Services from './components/Services/services.js'; 
import AboutUs from './components/About/about.js'; 

function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
                <Container>
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/contactus" element={<Contactus />}></Route>
                            <Route path="/strategic" element={<Strategic />}></Route>
                            <Route path="/cybersecurity" element={<Cybersecurity />}></Route>
                            <Route path="/Technologyimpl" element={<TechnologyImpl />}></Route>
                            <Route path="/datamanagment" element={<Datamanagment />}></Route>
                            <Route path="/services" element={<Services />}> </Route>
                            <Route path="/about"element={<AboutUs />}> </Route>
                        </Routes>
                </Container>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes;
