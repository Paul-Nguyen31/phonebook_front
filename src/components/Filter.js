import server from '/Webdev/phonebook/src/services/server'

const Filter = ({ persons, search, setPersons, setSuccessful }) => {


    return (
      <>
        {persons
          .filter((user) => {
            if (search === "") {
              return user;
            } else {
              return user.name.toLowerCase().includes(search.toLowerCase());
            }
          })
          .map((user) => (

            <div key={user.id}>
              <p className='nameList'>
                {user.name} {user.number} <button onClick={()=> {
            
                
                const personsData = persons.find(n => n.id === user.id)
                const newList = persons.filter(n => n.id !== user.id )
                const list = setPersons(newList)
          

                if (window.confirm(`Are you sure you want to delete ${user.name} #${user.number}?`))
                {
                  server
                  .deleteName(personsData.id, list)
                  .then((response) => {
                    setSuccessful(`Information for ${user.name} has been removed. `)
                    setTimeout(() => {
                      setSuccessful(null)
                    }, 5000);
                    return response
                  
  
                  })

                  
                  .catch(error => {
                    alert(`Your contact "${user.name}", has already been removed!`)
                    setPersons(persons.filter(n => n.id !== user.id))
                  
                  })
                   } 
                   else { return setPersons(persons)}
                }
                }>Delete</button>
              </p>
            </div>
          ))}
      </>
    );
  };
  export default Filter;
  