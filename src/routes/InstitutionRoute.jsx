import Institution from "../components/Institution/Institution";
import { useParams } from "react-router-dom";

const InstitutionRoute = () => {
    const { id } = useParams();
    return <Institution id={id} />;
};

export default InstitutionRoute;
