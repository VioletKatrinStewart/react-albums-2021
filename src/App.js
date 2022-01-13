import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Views/Home';
import AlbumDetail from './Views/AlbumDetail';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/albums" exact component={AlbumDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
