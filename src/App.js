import React from "react";
import { Route, Routes,Link, BrowserRouter as Router} from "react-router-dom"
import User from "./User";
import Todo from './Todo';
import Posts from './Posts';
import Comments from "./Comment";
import EditUser from "./Edit";
import Add from "./Add";

 
const App=()=> {
  

  return (
    <>
    <Router>
    <div>
      <nav>
        <h3> user page</h3>
          <ul>
              <li><Link to="/User">user</Link></li>   
              <li> <Link to="/Todo">Todo</Link></li>
              <li><Link to="/Posts">Post</Link></li>
              <li> <Link to="/Comments">comment</Link></li>
              <li><Link className = "btn btn-outline-light mr-2" to="/Add">CreateUser</Link></li> 
          </ul>

      </nav>
      <Routes>
         <Route exact path="/User" element={<User/>}/>
         <Route path="/Todo/:id" element={<Todo/>}/>
         <Route path="/Posts/:id" element={<Posts/>}/>
         <Route path="/Comments/:id" element={<Comments/>}/>
         <Route path="/EditUser/:id" element={<EditUser/>}/>
         <Route path="/Add" element={<Add/>}/>
      </Routes>
      </div>
      </Router>
   </>
  );
}

export default App;
