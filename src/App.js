import './App.css';
import { Routes, Route } from 'react-router-dom';
import { routes } from './routes/routes';


function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          {
            routes.map(route => <Route element={route.element} path={route.path} exact={route.exact} key={route.path} />)
          }
        </Routes>
      </div>
    </div>
  );
}

export default App;
