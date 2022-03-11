import { useEffect } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Searchbar from './components/searchbar';
import Logs from './components/logs/logs';
import AddBtn from './components/addBtn';
import EditLogModal from './components/logs/EditLogModal';
import AddLogModal from './components/logs/addLogModal';
import AddTechModal from './components/techs/addTechModal';
import TechsModal from './components/techs/techsModal';

import { Provider } from 'react-redux';
import store from './store';

function App() {

  useEffect( () => {
    M.AutoInit();
  }, [])

  return (
    <Provider store={store}>
      <Searchbar />
      <div className="container">
          <AddBtn />
          <EditLogModal />
          <AddLogModal />
          <AddTechModal />
          <TechsModal />
          <Logs />
      </div>
    </Provider>
  );
}

export default App;
