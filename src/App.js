
import './App.css';
import CreateAccount from './pages/CreateAccount';
import IndexRoute from './routes/idRoutes';

import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (<Router>
    <IndexRoute />
  </Router>
  );
}

export default App;
