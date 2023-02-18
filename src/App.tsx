import './App.scss';
import Container from './components/Container';
import Generate from './components/Generate';
import Validate from './components/Validate';

function App() {
  document.title = 'CPF Tools'
  
  return (
    <Container className="container-home">
      <Validate className='container-validate' />
      <Generate className='container-generate' />
    </Container>
  )
}

export default App;