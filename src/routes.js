import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Places from "pages/Places";
import Contactus from "./pages/Contactus";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Navbar />
                <Container>
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/contactus" element={<Contactus />}></Route>
                            <Route path="/:id" element={<Places />}></Route>
                        </Routes>
                </Container>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes;