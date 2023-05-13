import { BrowserRouter,Route,Router,Routes } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetailsPage from './components/ShowDetails';

function App() {
  return (
    <BrowserRouter>
    <Router>
      <Route exact path= "/" component={ShowList}/>
      <Route exact path="/shows/:id" component={ShowDetailsPage} />
    </Router>
    </BrowserRouter>
  );
}

export default App;
