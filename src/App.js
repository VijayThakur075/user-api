import React from "react";
import { Route, Routes,Link, BrowserRouter as Router} from "react-router-dom"
import User from "./User";
import Todo from './Todo';
import Posts from './Posts';
import Coments from "./Coments";

 
const App=()=> {
  

  return (
    <>
    <Router>
    <div>
      <nav>
        <h3> user page</h3>
          <ul>
              <li><Link to="/">user</Link></li>   
              <li> <Link to="/Todo">Todo</Link></li>
              <li><Link to="/Posts">Post</Link></li>
              <li> <Link to="/comments">comment</Link></li>
          </ul>

      </nav>
      <Routes>
         <Route exact path="/" element={<User/>}/>
         <Route path="/Todo" element={<Todo/>}/>
         <Route path="/Posts" element={<Posts/>}/>
         <Route path="/comments/:id" element={<Coments/>}/>
         <Route path="/nested-router" element={<users/>} />
      </Routes>
      </div>
      </Router>
   </>
  );
}

export default App;
