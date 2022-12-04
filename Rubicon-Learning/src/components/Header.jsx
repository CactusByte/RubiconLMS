import { Container } from 'react-bootstrap'
import '../index.css'
const Header = ({ head }) => {
  return (
    <Container>
      <div className='starter-template text-center mt-5'>
        <h1>{head}</h1>
        
        <h4>Register</h4>
        <button style={{borderRadius: 4, backgroundColor: 'orange', text: 'white'}}>Register</button>
      </div>
    </Container>
  )
}

export default Header
