 import React,{ useState,useContext, useEffect } from 'react';
import { GlobalContext } from '../contacts/GlobalState';
import { Link , useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
 import {Form, FormGroup,Label , Input, Button} from  'reactstrap';

function EditUser(props) {

    
    const [selectedUser, setSelectedUser] = useState({
        id: '',
        name: ''
    }); 
    const { users, editUser } = useContext(GlobalContext); 
    const history = useHistory();
    const currentUserId = props.match.params.id;
  
   useEffect(() =>{
       const userId = currentUserId;
       const selectedUser = users.find(user => user.id ===  userId);
       setSelectedUser(selectedUser);

   },[currentUserId, users]);

    const submitHandler = (e) => {
      e.preventDefault(); 
          editUser(selectedUser);

    history.push("/");
    }
    const changeHandler = (e) => { 
  
        setSelectedUser({ ...selectedUser, [e.target.name] : e.target.value})
    }
    

    return (
        <Form onSubmit={submitHandler}>
            <FormGroup className="d-flex flex-column ">
                <Label>Name</Label>
                <Input  type="text"
                value={selectedUser.name}
                onChange={changeHandler} 
                placeholder="Enter Name" />
            </FormGroup>
            <Button type="submit">Edit Name</Button>
            <Link to="/" className="btn btn-danger ml-2">cancel</Link>
        </Form>
    )
}

export default EditUser
