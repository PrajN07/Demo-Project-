import React, { useState } from 'react';
import AddUser from './AddUser';
import UserList from './UserList';


function App() {
const [details,setDetails] = useState([]);
  
const showDetails = (userDetails)=>{
    setDetails((prevDetails)=>{
      return [...prevDetails, {name: userDetails.name, age: userDetails.age}];
    });
    
  }


  return (
    <div>
      <AddUser onSelection={showDetails}/>
      
       <UserList userData={details}/>
    </div>
  );
}

export default App;
