// import styles
import './App.css'
// import routes
import PublicRoutes from './routes/Public.routes.jsx';
//import dependencies
import { BrowserRouter } from 'react-router-dom';

const App = () => {

  return (
    <BrowserRouter>
      <PublicRoutes/>
    </BrowserRouter>
  );

}

export default App