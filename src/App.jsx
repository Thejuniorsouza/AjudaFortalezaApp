// import { useState } from "react";
import Hero from "./components/Hero/Hero.jsx";
import Footer from "./components/Footer/Footer.jsx";
import NavBar from "./components/Navbar/Navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Explore from "./components/Explore/Explore";
//import Cardgroup from "./components/Card/Card";
import Button from "./components/Button/Button.jsx";
import "typeface-montserrat";
import { getFirestore } from "firebase/firestore";
import { useEffect } from "react";
import app from "./utils/firebase.js";
import { collection, getDocs } from "firebase/firestore";
import TimeLine from "./components/TimeLine/Timeline.jsx";

function App() {
    // const [database, setDatabase] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const db = getFirestore(app);
            // setDatabase(db)
            const querySnapshot = await getDocs(collection(db, "instituicoes"));
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data().nome}`);
            });
        };
        fetchData();
    }, []);

    return (
        <>
            <NavBar />
            <Hero />
            <Explore />
            {/* <Cardgroup/> */}
            <TimeLine />
            <Footer />
        </>
    );
}

export default App;
