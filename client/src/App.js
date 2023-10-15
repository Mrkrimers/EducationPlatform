import './App.css';
import MyContext from './context/MyContext';
import useAuth from './hooks/useAuth';
import routesProvider from './RoutesProvider/routesProvider';

function App() {
  const dataToken = useAuth();
  const routes = routesProvider(Boolean(dataToken.token))

  return (
    <>
      <MyContext.Provider value={dataToken}>

        {routes}

      </MyContext.Provider>
    </>
  );
}

export default App;
