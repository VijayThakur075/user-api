import React,{useEffect}from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { getEdit, getModel } from "./action";
import { useSelector,useDispatch } from "react-redux";
import Button from "@restart/ui/esm/Button";
import { Modal } from "bootstrap"; 
const EditUser =(props) =>{
    const navigate= useNavigate();
    const {id} = useParams();
   /* const [user, setUser] =useState({
        userId:"",
        username:"",
        email:""
    });*/
    const editData = useSelector((state) => state.edit.editUser);
    const dispatch = useDispatch();
    const edituser = useSelector((state) => state.edit.show);

    
    const{ userId, username, email} = editData;
        const handle = e => {
            dispatch(getEdit({...editData,[e.target.name]: e.target.value}));
        };

        const Submit= async(e) =>{
            e.preventDefault();
            await axios.put(`http://localhost:3008/users/${id}`, editData)
            navigate('/User');
        };

        useEffect(() =>{
            axios.get(`http://localhost:3008/users/${id}`).then((response) => {
               dispatch(getEdit(response.data));
            });
        }, []);

        const handleClose = () => dispatch(getModel(false));
        const handleShow = () => dispatch(getModel(true));

        return(
            <>
             <Button variant="primary" onClick={handleShow}>
                 Launch demo modal
             </Button>

            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="wrapper">
                <form onSubmit={(e) =>Submit(e)}>
                <div className="form-group">
                <label>Enter ID</label>
                <input onChange={(e)=>handle(e)} value={userId} type="text" name="userId" className="form-control"/>
            </div>
            <div className="form-group">
                <label> username</label>
                <input onChange={(e)=>handle(e)} value={username} type="text" name="username" className="form-control"  />
            </div>
            <div className="form-group">
                <label> enter email</label>
                <input onChange={(e)=>handle(e)} value={email} type="text" name="email" className="form-control"  />
            </div>
            <div className="form-group">
                <input type="submit" onSubmit={()=>Submit()} className="btn btn-success btn-block"/>
            </div>

            </form>
            </div>
            </Modal.Body>
            <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
        )
}
export default EditUser;