import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Cardgroup from '../Card/Card';

function Explore() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="aju" title="Ajuda humanitária">
       <Cardgroup />
    Card sobre Ajuda Humanitária
      </Tab>
      <Tab eventKey="animal" title="Animais">
      <Cardgroup />
      Card sobre Animais
      </Tab>
      <Tab eventKey="crianca" title="Crianças">
      <Cardgroup />
      Card sobre Crianças
      </Tab>
      <Tab eventKey="mulher" title="Mulheres">
      <Cardgroup />
      Card sobre Mulheres
      </Tab>
      <Tab eventKey="saude" title="Saúde">
      <Cardgroup />
      Card sobre Saùde
      </Tab>
     
    </Tabs>
  );
}

export default Explore;