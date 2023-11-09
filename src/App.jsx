// import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer.jsx";
import NavBar from "./components/Navbar/Navbar.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import Explore from "./components/Explore/Explore";
// import Cardgroup from "./components/Card/Card";
import 'typeface-montserrat';

function App() {

    // const [count, setCount] = useState(0);

    return (
        <>
            <NavBar />
            <Header />
            <Explore />
            {/* <Cardgroup/> */}
            <Footer />
        </>
    );
}

export default App;
