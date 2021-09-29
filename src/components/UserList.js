import React,{useContext} from 'react';
import { GlobalContext  } from '../contacts/GlobalState';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import { ListGroup, ListGroupItem ,Button} from 'reactstrap';

function UserList() {
   const { users, removeUser } = useContext(GlobalContext);
 


    return (
         <ListGroup className="mt-4">
           {users.map(user =>{
             
       return  <ListGroupItem className=" d-flex flex-row justify-content-between" key={user.id}>
               <strong className="mr-2 p-2 ">{user.name}</strong>    
              <div className="ml-auto">
              <Link className="btn btn-warning m-1 ml-1" to ={`edit/${user.id}`}>Edit</Link>
              <Button color="danger" onClick={() =>{ removeUser(user.id)}}>Delete</Button>
              </div>  
          </ListGroupItem>
          })}
         </ListGroup>
    )
}

export default UserList
