import Footer from "./components/Footer/Footer.jsx";
import NavBar from "./components/Navbar/Navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "typeface-montserrat";
import { getFirestore } from "firebase/firestore";
import { useEffect } from "react";
import app from "./utils/firebase.js";
import { collection, getDocs } from "firebase/firestore";
import { Outlet } from "react-router-dom";

function App() {
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const db = getFirestore(app);
    //         // setDatabase(db)
    //         const querySnapshot = await getDocs(collection(db, "instituicoes"));
    //         querySnapshot.forEach((doc) => {
    //             console.log(`${doc.id} => ${doc.data().nome}`);
    //         });
    //     };
    //     fetchData();
    // }, []);

    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    );
}

export default App;
