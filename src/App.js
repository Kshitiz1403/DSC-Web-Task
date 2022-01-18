import { useMediaQuery } from 'react-responsive';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Button from './components/Button';
import Images from './Images';
import Users from './Users';

function App() {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 649px)'
  })

  return (
    <div className="App">
      <div style={{ display: 'flex', flexDirection: isDesktopOrLaptop ? 'row' : 'column' }}>
        <Link to={"/users"} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button text="Users" onPress={() => console.log("hello")} />
        </Link>
        <Link to={"/images"} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button text="Images" onPress={() => console.log("no")} />
        </Link>
      </div>
    </div>
  );
}

export default App;
