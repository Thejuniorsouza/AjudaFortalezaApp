import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from '../Button/Button';
import styles from '../Form/Form.modules.css'
import { Container } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function GridComplexExample() {
  return (
    <Form className={`${styles.Form} formulario  p-5  mx-auto `}>
      <Container className='containerForm ms-Í'>
      <h6 className='fs-4 fw-bolder text-center' >Conhece uma entidade que você deseja cadastrar em nossa plataforma?</h6>
      <Container className="formDropdown d-flex align-items-end p-0 mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label className='fs-5 fw-bolder'>Nome</Form.Label>
          <Form.Control className='rounded-pill ' type="text" placeholder="Nome da instituição" />
        </Form.Group>

        <Form.Group className= "GroupCategory px-4" as={Col} controlId="formGridCategory" >
          {/* <Form.Label className='fs-5 fw-bolder'>Categoria</Form.Label> */}
          <DropdownButton
        id="dropdown-button-dark-example2"
        variant="secondary"
        title="Categoria"
        className="BtnDropdown mt-2"
        data-bs-theme="dark"
          >
        <Dropdown.Item href="#/action-1" >Ajuda Humanitária</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Animais</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Mulheres</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Crianças</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Saúde</Dropdown.Item>


      </DropdownButton>
        </Form.Group>

      </Container>

      <Form.Group className="mb-3" controlId="formGridEmail">
        <Form.Label className='fs-5 fw-bolder'>E-mail da Instituição</Form.Label>
        <Form.Control className=' formStyle rounded-pill w-75' type='email' placeholder="Digite o email aqui"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress">
        <Form.Label className=' fs-5 fw-bolder'>Endereço da instituição</Form.Label>
        <Form.Control className='formStyle rounded-pill w-75' placeholder="Rua 12, 345, Centro " />
      </Form.Group>

      <Row className="formCep mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label className='fs-5 fw-bolder'>Cidade</Form.Label>
          <Form.Control className='formStyle rounded-pill' placeholder="Ex.: Fortaleza"/>
        </Form.Group>


        <Form.Group as={Col} controlId="formGridCep">
          <Form.Label className='formStyle fs-5 fw-bolder '>CEP</Form.Label>
          <Form.Control className='formStyle rounded-pill w-50' placeholder="60.000-100" />
        </Form.Group>
      </Row>

        <Button type="submit">Cadastrar</Button>

      </Container>
    </Form>
  );
}

export default GridComplexExample;


