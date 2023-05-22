import server from "../services/server";

const AddNewPerson = ({
    setNewName,
    setNewNumber,
    setPersons,
    persons,
    newName,
    newNumber,
    InputName,
    InputNumber,
    successful,
    setSuccessful,
    setErrorMessage,
    errorMessage
  }) => (
    <form
      onSubmit={(e) => {
        e.preventDefault();
  
        if (
           persons.find(
            (dup) => (dup.name) === (newName)
          )
        ) {

         if ( window.confirm
          (`${newName} is already in the phonebook! `+
          `Would you like to update the old number with the new one?`)){

            const oldUserData = persons.find(n => n.name === newName)
            const newUserData = {...persons, name: newName,number: newNumber}

  
            const newUser = setPersons(persons.map(user =>{
              if ( user.name === newName){
                return {...persons, name: newName,number: newNumber, id:user.id}
              }
              else { return user}
            }))

            setSuccessful(`${newName}'s number has been updated!`)
            setTimeout(() => {
              setSuccessful(null)
            }, 5000)
            setNewName('')
            setNewNumber('')

            server
            .update(oldUserData.id, newUserData)
            .then(() => newUser)
            .catch(error => {
              if(persons.find((user, id) => user.id !== id)){
              setErrorMessage(`Sorry but it seems like ${newName} has already been removed from our servers..`)
              setTimeout(() => {
                setErrorMessage(null)
              }, 5000);} 
              
            })

        
          
       } } else {
          const Names = {
            name: newName,
            number: newNumber,
            id: persons.length + 1
          };

          server
          .create(Names)
          .then(() => 
            setPersons(persons.concat(Names))
          )
          setSuccessful(`Success! ${newName} has been added to your phonebook!`)
          setTimeout(() => {
            setSuccessful(null)
          }, 5000);

          setNewName('')
          setNewNumber('')
        }
    
      }

    }
    >
      {InputName}
      {InputNumber}
      <button type="submit">Add</button>
    </form>
  );
  
  export default AddNewPerson;
  