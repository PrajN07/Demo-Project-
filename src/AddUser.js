import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import classes from './AddUser.module.css';
import ErrorModal from "./ErrorModal";

function AddUser(props) {
  const [data, setData] = useState({
    name: "",
    age: "",
  });
  const [error, setError]=useState()

  const changeHandler = (input, value) => {
    setData((prevData) => {
      return {
        ...prevData,
        [input]: value,
      };
    });
  };
 
 

  const submitHandler = (event) => {
    event.preventDefault();
    if(data.name.trim().length === 0 || data.age.trim().length === 0){
      setError('Invalid input please enter appropriate age and name');
      return;
      
    }
    if(+data.age < 0){
      setError('Invalid age. Age must be > 0. Please enter a valid age');
      return;
    }
  
    props.onSelection(data);
  };

  const errorHandler = ()=>{
   setError(null);
  }
  return (
    <div>
    {error && <ErrorModal title={'Error'} message={error} error={errorHandler}/>}
    <Card className={classes.input}>
    <form onSubmit={submitHandler}>
      <p>
        <label>Username</label>
      </p>

      <input
        type="text"
        id="Username"
        value={data.name}
        placeholder="Type your name here"
        onChange={(event) => changeHandler("name", event.target.value)}
      ></input>
      <p>
        <label>Age (Years)</label>
      </p>
      <input
        type="number"
        id="Age"
        value={data.age}
        placeholder="Enter age here"
        onChange={(event) => changeHandler("age", event.target.value)}
      ></input>
      <div>
        <Button>Add User</Button>
      </div>
    </form>
    </Card>
    </div>
  );
}

export default AddUser;
