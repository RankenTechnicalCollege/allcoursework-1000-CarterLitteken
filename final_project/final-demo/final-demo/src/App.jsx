import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { nanoid } from 'nanoid';
import AddStudent from './AddStudent';

function App() {
  const [allStudents, setAllStudents] = useState(null);

  const students = [{
    id: nanoid(),
    firstName: "Leeland",
    lastName: "Ebbing",
    email: "lebbing0@patch.com",
    image: "student1.jpg"
  }, {
    id: nanoid(),
    firstName: "Darb",
    lastName: "Scrogges",
    email: "dscrogges1@tiny.cc",
    image: "student2.jpg"
  }, {
    id: nanoid(),
    firstName: "Rochella",
    lastName: "Trudgion",
    email: "rtrudgion2@live.com",
    image: "student3.jpg"
  }, {
    id: nanoid(),
    firstName: "Tessie",
    lastName: "Hellyar",
    email: "thellyar3@europa.eu",
    image: "student4.jpg"
  }, {
    id: nanoid(),
    firstName: "Sibeal",
    lastName: "Harrild",
    email: "sharrild4@icio.us",
    image: "student5.jpg"
  }, {
    id: nanoid(),
    firstName: "Richard",
    lastName: "Frensch",
    email: "rfrensch5@nymag.com",
    image: "student6.jpg"
  }, {
    id: nanoid(),
    firstName: "Beaufort",
    lastName: "Escudier",
    email: "bescudier6@usnews.com",
    image: "student7.jpg"
  }, {
    id: nanoid(),
    firstName: "Kennedy",
    lastName: "Maxfield",
    email: "kmaxfield7@squidoo.com",
    image: "student8.jpg"
  }, {
    id: nanoid(),
    firstName: "Georgeanna",
    lastName: "O'Riordan",
    email: "goriordan8@hhs.gov",
    image: "student9.jpg"
  }, {
    id: nanoid(),
    firstName: "Marisa",
    lastName: "Carletto",
    email: "mcarletto9@opensource.org",
    image: "student10.jpg"
  }];

  const saveStudents = (students) => {
    setAllStudents(students);
    
  }

  const addStudent = (newStudent) => {
    const updatedStudents = [...allStudents, newStudent];
    saveStudents(updatedStudents);
  }
  
  return (
    <div className='container'>
      <div className='row'>
        {allStudents && allStudents.map((student) => (
        <div className='col-lg-2' key={student.id}>
          <div className='card'>
          <img src={student.image} alt='Our Student' />
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>{student.firstName}</li>
            <li className='list-group-item'>{student.lastName}</li>
            <li className='list-group-item'>{student.email}</li>
          </ul>
          </div>
        </div>)
  )}
      </div>

        {!allStudents && <button type='button' className='btn btn-lg btn-success' onClick={() => setAllStudents(students)}>Save Student</button>}
        <AddStudent addStudent={addStudent} />
    </div>
    
  )
}

export default App
