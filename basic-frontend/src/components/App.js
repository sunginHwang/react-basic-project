import React from 'react';
import {Link} from 'react-router-dom';
const App = () => {

    return(
      <div>
          <h2>React-Basic-App</h2>
          <Link to="/board">boardLink</Link>
      </div>
    );
}; 
export default App;