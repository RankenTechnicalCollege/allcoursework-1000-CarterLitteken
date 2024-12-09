import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [allStudents, setAllStudents] = useState(null);

  const students = [{
    firstName: "Leeland",
    lastName: "Ebbing",
    email: "lebbing0@patch.com"
  }, {
    firstName: "Darb",
    lastName: "Scrogges",
    email: "dscrogges1@tiny.cc"
  }, {
    firstName: "Rochella",
    lastName: "Trudgion",
    email: "rtrudgion2@live.com"
  }, {
    firstName: "Tessie",
    lastName: "Hellyar",
    email: "thellyar3@europa.eu"
  }, {
    firstName: "Sibeal",
    lastName: "Harrild",
    email: "sharrild4@icio.us"
  }, {
    firstName: "Richard",
    lastName: "Frensch",
    email: "rfrensch5@nymag.com"
  }, {
    firstName: "Beaufort",
    lastName: "Escudier",
    email: "bescudier6@usnews.com"
  }, {
    firstName: "Kennedy",
    lastName: "Maxfield",
    email: "kmaxfield7@squidoo.com"
  }, {
    firstName: "Georgeanna",
    lastName: "O'Riordan",
    email: "goriordan8@hhs.gov"
  }, {
    firstName: "Marisa",
    lastName: "Carletto",
    email: "mcarletto9@opensource.org"
  }]
  
  
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-2'>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>One</li>
            <li className='list-group-item'>Two</li>
            <li className='list-group-item'>Three</li>
          </ul>
        </div>
        <div className='col-lg-2'>Col2</div>
        <div className='col-lg-2'>Col3</div>
        <div className='col-lg-2'>Col4</div>
        <div className='col-lg-2'>Col5</div>
        <div className='col-lg-2'>Col6</div>


      </div>


    </div>
    
  )
}

export default App
