import Hero from "../components/Hero/Hero.jsx";
import Explore from "../components/Explore/Explore";
import TimeLine from "../components/TimeLine/Timeline.jsx";
import {
    getFirestore,
    collection,
    query,
    where,
    getDocs,
} from "firebase/firestore";
import app from "../utils/firebase.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Navbar/Navbar.modules.css";
import { useState } from "react";
import SearchResults from "../components/SearchResults/SearchResults.jsx";

const Home = () => {
    const [searchForm, setSearchForm] = useState("");
    const [searchResults, setSearchResults] = useState();
    const firestore = getFirestore(app);

    const handleSearchFormChange = (event) => {
        setSearchForm(event.target.value);
    };
    // Supondo que 'app' seja a instância do Firebase já inicializada.

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (searchForm.trim() === "") {
            // Buscar todos os registros se a entrada estiver vazia
            const querySnapshot = await getDocs(
                collection(firestore, "instituicoes")
            );
            setSearchResults(
                querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
            );
        } else {
            // Realizar busca nos campos especificados
            const searchTerm = searchForm.toLowerCase();
            const campos = ["nomeInstituicao", "categoria", "bairro"];
            const promises = campos.map((campo) =>
                getDocs(
                    query(
                        collection(firestore, "instituicoes"),
                        where(campo, "==", searchTerm)
                    )
                )
            );

            const resultados = await Promise.all(promises);
            const documentosUnicos = new Map();

            resultados.forEach((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    documentosUnicos.set(doc.id, {
                        id: doc.id,
                        ...doc.data(),
                    });
                });
            });
            setSearchResults([...documentosUnicos.values()]);
        }
    };
    return (
        <div>
            <Hero
                searchForm={searchForm}
                formHandler={handleSearchFormChange}
                handleSubmit={handleSubmit}
            />
            {!searchResults && <Explore />}
            {searchResults && <SearchResults searchResults={searchResults} />}
            <TimeLine />
        </div>
    );
};

export default Home;
