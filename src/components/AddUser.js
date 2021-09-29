import React,{ useState,useContext } from 'react';
import { GlobalContext } from '../contacts/GlobalState';
import { Link , useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {v4 as uuid} from 'uuid';
import {Form, FormGroup,Label , Input, Button} from  'reactstrap';


function AddUser() {
    
    const [name, setName] = useState(''); 
    const { addUser } = useContext(GlobalContext); 
    const history = useHistory();
  
    const submitHandler = (e) => {
      e.preventDefault();
      const newUser = {
        id: uuid(),
        name: name
    }

    addUser(newUser);
    history.push("/");
           console.log("history")
    }
    const changeHandler = (e) => { 
           setName(e.target.value)
    }
    
    return (
        <Form >
            <FormGroup className="d-flex flex-column ">
                <Label>Name</Label>
                <Input  type="text" 
                    value="name"
                    onChange={changeHandler}
                    placeholder="Enter Name" />
            </FormGroup>
            <Button type="submit" onClick={submitHandler}>Submit</Button>
            <Link to="/" className="btn btn-danger ml-2">cancel</Link>
        </Form>
    )
}

export default AddUser;
