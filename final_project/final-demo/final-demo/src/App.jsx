import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { nanoid } from 'nanoid';
import AddStudent from './component/AddStudent';
import _ from 'lodash';
import Student from './component/Student';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [allStudents, setAllStudents] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [keywords, setKeywords] = useState('');
  const [gradYear, setGradYear] = useState('');

  useEffect(() => {
    if(localStorage){
      const studentsLocalStorage = JSON.parse(localStorage.getItem('students'));

      if(studentsLocalStorage){
        saveStudents(studentsLocalStorage);
      }else{
        saveStudents(students);
      }
    }
    
  }, []);

  const students = [{
    id: nanoid(),
    firstName: "Leeland",
    lastName: "Ebbing",
    email: "lebbing0@patch.com",
    image: "student1.jpg",
    gradYear: 2024
  }, {
    id: nanoid(),
    firstName: "Darb",
    lastName: "Scrogges",
    email: "dscrogges1@tiny.cc",
    image: "student2.jpg",
    gradYear: 2025
  }, {
    id: nanoid(),
    firstName: "Rochella",
    lastName: "Trudgion",
    email: "rtrudgion2@live.com",
    image: "student3.jpg",
    gradYear: 2026
  }, {
    id: nanoid(),
    firstName: "Tessie",
    lastName: "Hellyar",
    email: "thellyar3@europa.eu",
    image: "student4.jpg",
    gradYear: 2025
  }, {
    id: nanoid(),
    firstName: "Sibeal",
    lastName: "Harrild",
    email: "sharrild4@icio.us",
    image: "student5.jpg",
    gradYear: 2024
  }, {
    id: nanoid(),
    firstName: "Richard",
    lastName: "Frensch",
    email: "rfrensch5@nymag.com",
    image: "student6.jpg",
    gradYear: 2026
  }, {
    id: nanoid(),
    firstName: "Beaufort",
    lastName: "Escudier",
    email: "bescudier6@usnews.com",
    image: "student7.jpg",
    gradYear: 2025
  }, {
    id: nanoid(),
    firstName: "Kennedy",
    lastName: "Maxfield",
    email: "kmaxfield7@squidoo.com",
    image: "student8.jpg",
    gradYear: 2024
  }, {
    id: nanoid(),
    firstName: "Georgeanna",
    lastName: "O'Riordan",
    email: "goriordan8@hhs.gov",
    image: "student9.jpg",
    gradYear: 2026
  }, {
    id: nanoid(),
    firstName: "Marisa",
    lastName: "Carletto",
    email: "mcarletto9@opensource.org",
    image: "student10.jpg",
    gradYear: 2025
  }];

  const saveStudents = (students) => {
    setAllStudents(students);
    setSearchResults(students);
    if(localStorage){
      localStorage.setItem('students', JSON.stringify(students));
      console.log('saved to local storage');
    }
  };

  const addStudent = (newStudent) => {
    const updatedStudents = [...allStudents, newStudent];
    saveStudents(updatedStudents);
  };

  const removeStudent = (studentToDelete) => {
    //console.table(studentToDelete);
    const updatedStudentArray = allStudents.filter(student => student.id !== studentToDelete.id);
    saveStudents(updatedStudentArray);
  };

  const updateStudent = (updatedStudent) => {
    //console.table(updatedStudent);
    const updatedStudentArray = allStudents.map(student => student.id === updatedStudent.id ? {...student, ...updatedStudent} : student);
    saveStudents(updatedStudentArray);
  };

  const searchStudents = () => {
    let keywordsArray = [];

    if(keywords){
      keywordsArray = keywords.toLowerCase().split(' ');
    }

    if(gradYear){
      keywordsArray.push(gradYear.toString());
    }

    if(keywordsArray.length > 0){
      const searchResults = allStudents.filter(student => {
        for(const word of keywordsArray){
          if(student.firstName.toLowerCase().includes(word) || 
             student.lastName.toLowerCase().includes(word) ||
             student.gradYear === parseInt(word)){
              return true;
            }
        }
        return false;
      });
      setSearchResults(searchResults);
    }else{
      setSearchResults(allStudents);
    }
  };
  
  return (
    <div className='container'>
      <div className='row' id='allStudent'>
        <h3>Current Students</h3>
        {searchResults && searchResults.map((student) => (
        <div className='col-lg-2' key={student.id}>
          <Student student={student} removeStudent={removeStudent} updateStudent={updateStudent} />
          
        </div>)
  )}
      </div>

        {/*!allStudents && <button type='button' className='btn btn-lg btn-success' onClick={() => setAllStudents(students)}>Save Student</button>*/}
        {<AddStudent addStudent={addStudent} />}
        <div className='row mt-4' id='searchStudents'>
          <h3>Search Students</h3>
          <div className='col-md-4'>
            <label htmlFor='txtKeywords'>Search by First or Last Name</label>
            <input type='text' className='form-control' placeholder='Search First or Last Name' onChange={e => setKeywords(e.currentTarget.value)} value={keywords} />
          </div>
          <div className='col-md-4'>
            <label htmlFor='txtKeywords'>Search by Graduation Year</label>
            <select className='form-select' value={gradYear} onChange={e => setGradYear(e.currentTarget.value)}>
              <option value=''>Select Year</option>
              {_(allStudents).map(student => student.gradYear).sort().uniq().map(year => <option key={year} value={year}>{year}</option>).value()}
            </select>
          </div>
          <div className='col-md-4 mt-3'>
            <button type='button' className='btn btn-lg btn-primary' onClick={searchStudents}>Search Students <FontAwesomeIcon icon={faSearch}/></button>
          </div>

        </div>
    </div>
    
  )
}

export default App
