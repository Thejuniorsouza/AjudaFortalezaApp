import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./TimeLine.modules.css";
import "../../img/search.svg";
import {
    Search,
    Buildings,
    PersonHeart,
    CreditCard,
} from "react-bootstrap-icons";
import { HashLink } from "react-router-hash-link";

function TimeLine() {
    return (
        <VerticalTimeline
            // id="timeLine"
            layout={"1-column-left"}
            lineColor={"white"}
            animate={true}
            className={"timeline"}
        >
            <HashLink
                smooth
                to={"/TimeLine"}
                activeClassName="selected"
                activeStyle={{ color: "red" }}
                className="text-decoration-none"
            >
                <h1 className="title-timeline">Como funciona?</h1>
            </HashLink>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "transparent", color: "#fff" }}
                iconStyle={{ background: "#80d0c7", color: "#fff" }}
                iconClassName={"icon-timeline"}
                visible={false}
                icon={<Search />}
            >
                <h3 className="vertical-timeline-element-title">
                    Descubra Organizações Relevantes.
                </h3>
                <p>
                    Navegue pela variedade de ONGs em Fortaleza listadas em
                    nossa plataforma. Utilize a aba de pesquisas para encontrar
                    organizações por área de atuação, localização ou causa que
                    mais lhe interesse.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "transparent", color: "#fff" }}
                iconStyle={{ background: "#80d0c7", color: "#fff" }}
                visible={false}
                icon={<Buildings />}
            >
                <h3 className="vertical-timeline-element-title">
                    Conheça Suas Missões e Necessidades.
                </h3>
                <p>
                    Ao selecionar uma ONG, explore informações detalhadas sobre
                    sua missão, objetivos e os projetos que estão em andamento.
                    Descubra quais recursos e apoios elas necessitam para
                    continuarem suas ações.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "transparent", color: "#fff" }}
                iconStyle={{ background: "#80d0c7", color: "#fff" }}
                visible={false}
                icon={<PersonHeart />}
            >
                <h3 className="vertical-timeline-element-title">
                    Envolva-se e Contribua.
                </h3>
                <p>
                    Após conhecer melhor uma ou várias organizações, descubra as
                    diferentes formas de contribuir e fazer a diferença. Seja
                    através de doações financeiras, doação de tempo como
                    voluntário, fornecimento de materiais ou divulgação das
                    campanhas.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "transparent", color: "#fff" }}
                iconStyle={{ background: "#80d0c7", color: "#fff" }}
                visible={false}
                icon={<CreditCard />}
            >
                <h3 className="vertical-timeline-element-title">
                    Realize Doações de Forma Simples.
                </h3>
                <p>
                    Para doar,navegue pela página da ONG que você quer ajudar,
                    clique em uma opção de contato e escolha a forma mais
                    conveniente para você. Seja por meio de doações online,
                    depósitos bancários ou entregas diretas, sua contribuição
                    será valorizada e direcionada para onde é mais necessária.
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
}

export default TimeLine;
