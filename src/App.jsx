// import styles
import './App.css'
// import routes
import PublicRoutes from './routes/Public.routes.jsx';
//import dependencies
import { BrowserRouter } from 'react-router-dom';
// import usename context
import ProfileNameProvider from './context/ProfileNameContext.jsx';

const App = () => {

  return (
    <ProfileNameProvider>
      <BrowserRouter>
        <PublicRoutes/>
      </BrowserRouter>
    </ProfileNameProvider>
  );

}

export default App