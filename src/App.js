import { useState, useEffect } from "react";
import axios from 'axios';
import InputName from "./components/InputName";
import Filter from "./components/Filter";
import InputNumber from "./components/InputNumber";
import AddNewPerson from "./components/AddNewPerson";
import Title from "./components/Title";
import server from "./services/server"

const Success = ({message}) => {

if (message === null){
return null
}
return (
<div className="successStyle">
 {message}
</div>
)}

const Error = ({message}) => {

  if (message === null){
    return null
  }

  return (
<div className="error">
  {message}
</div>

  )}

const App = () => {

  // const hook = () => {
  //   console.log('effect')
  //     server
  //     .get('http://localhost:3001/persons')
  //     .then(response => {
  //       console.log("promise fullfilled")
  //       setPersons(response.data)
  //     })
  //   }
  //   useEffect(hook,[])

    useEffect(() => {
      server
      .getAll()
      .then(response => {
        setPersons(response)
      }
        )
    },[])
    
    
  const [persons, setPersons] = useState([
    // { name: "Arto Hellas", number: "817-222-222", id: 1 },
    // { name: "Paul Nguyen", number: "817-817-817", id: 2 },
    // { name: "Binh Nguyen", number: "682-242-8484", id: 3 },
    // { name: "Lyna Nguyen", number: "246-246-246", id: 4 }
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [successful, setSuccessful] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)


  return (
    <div>
      <Success message={successful}/>
      <Error message={errorMessage} />
      <Title heading="Phonebook" />
      <InputName
        title="filter shown with "
        set={search}
        handle={setSearch}
        text="search a name"
      />
      <div></div>
      <Title heading="Add a new contact" />
      <AddNewPerson
        newName={newName}
        setNewName={setNewName}
        InputName={<InputName title="Name" set={newName} handle={setNewName} />}
        InputNumber={<InputNumber title="Number" set={newNumber} handle={setNewNumber} />}     
        persons={persons}
        setPersons={setPersons}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        setSuccessful={setSuccessful}
        setErrorMessage={setErrorMessage}
      />
      <Title heading="Numbers" />
      <Filter persons={persons} search={search} setPersons={setPersons} setSuccessful={setSuccessful}/>
      
 
      
      

    </div>
  );
};

export default App;
