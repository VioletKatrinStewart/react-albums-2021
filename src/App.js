import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch path="/" exact component={Home} />
      <Switch path="/:id" exact component={AlbumDetail} />
    </BrowserRouter>
  );
}

export default App;
