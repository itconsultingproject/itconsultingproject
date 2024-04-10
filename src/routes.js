import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Places from "pages/Pages/Strategic";
import Contactus from "./pages/Contactus";
import Strategic from "pages/Pages/Strategic";
import Cybersecurity from "pages/Pages/Cybersecurity";
import TechnologyImpl from "pages/Pages/TechnologyImpl";
import Datamanagment from "pages/Pages/DataManagment";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Navbar />
                <Container>
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/contactus" element={<Contactus />}></Route>
                            <Route path="/strategic" element={<Strategic />}></Route>
                            <Route path="/cybersecurity" element={<Cybersecurity />}></Route>
                            <Route path="/Technologyimpl" element={<TechnologyImpl />}></Route>
                            <Route path="/datamanagment" element={<Datamanagment />}></Route>
                            <Route path="/:id" element={<Places />}></Route>
                        </Routes>
                </Container>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes;