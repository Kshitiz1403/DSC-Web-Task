import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import './App.css';
import Button from './components/Button';

function App() {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 649px)'
  })

  return (
    <div className="App">
      <div style={{ display: 'flex', flexDirection: isDesktopOrLaptop ? 'row' : 'column' }}>

        <Link to={"/users"} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button text="Users" />
        </Link>

        <Link to={"/images"} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button text="Images" />
        </Link>
        
      </div>
    </div>
  );
}

export default App;
