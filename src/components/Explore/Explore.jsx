import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../Card/Card";

const animalsMock = [
    {
        id: "Mx0W9VKEj2ADfgMbNk61",
        title: "Abrigo São Lázaro",
        tag: "Animais",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        imgUrl: "https://www.fortaleza.ce.gov.br/images/images1/SCSP/2021/Abrigo_SaoLazaro/cachorros-abrigo-so-lzaro-animal-7.jpg",
    },
    {
        id: 2,
        title: "APA",
        tag: "Educação",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        imgUrl: "https://scontent.fjdo10-1.fna.fbcdn.net/v/t39.30808-6/401513116_675954111311187_6219632465597190954_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IxLd_MkdLokAX8diOlg&_nc_ht=scontent.fjdo10-1.fna&oh=00_AfBxwqof_LU_56vRwSVEPhbE-2k4jE4EzAsdyV7mI65XUA&oe=6560576E",
    },
    {
        id: 3,
        title: "Lar TinTin",
        tag: "Meio Ambiente",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        imgUrl: "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:7.4555411:1631206570/lar-tintin.jpg?f=default&$p$f=101e323",
    },
];

function Explore() {
    return (
        <div className="bg-white pt-5 pb-5">
            <h2 className="text-center mb-4">Destaques</h2>
            <Tabs
                defaultActiveKey="animal"
                id="tabs"
                className="bg-transparent"
            >
                <Tab eventKey="aju" title="Ajuda humanitária"></Tab>
                <Tab eventKey="animal" title="Animais">
                    <Container>
                        <Row>
                            {animalsMock.map((ong) => (
                                <Col
                                    key={ong.id}
                                    className="mb-4"
                                    lg={4}
                                    md={6}
                                    xs={12}
                                >
                                    <Card
                                        id={ong.id}
                                        title={ong.title}
                                        description={ong.description}
                                        tag={ong.tag}
                                        imgUrl={ong.imgUrl}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="crianca" title="Crianças"></Tab>
                <Tab eventKey="mulher" title="Mulheres"></Tab>
                <Tab eventKey="saude" title="Saúde"></Tab>
            </Tabs>
        </div>
    );
}

export default Explore;
