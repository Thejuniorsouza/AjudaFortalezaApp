// import { useState } from "react";
import Hero from "./components/Hero/Hero.jsx";
import Footer from "./components/Footer/Footer.jsx";
import NavBar from "./components/Navbar/Navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Explore from "./components/Explore/Explore";
//import Cardgroup from "./components/Card/Card";
import Button from "./components/Button/Button.jsx";
import "typeface-montserrat";

function App() {
    // const [count, setCount] = useState(0);

    return (
        <>
            <NavBar />
            <Hero />
            <Button type="submit">Procurar</Button>
            <Explore />
            {/* <Cardgroup/> */}
            <Footer />
        </>
    );
}

export default App;
