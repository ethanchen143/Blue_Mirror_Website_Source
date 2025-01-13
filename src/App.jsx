import { useState } from 'react';
import './styles/app.css'
import Work from './components/Work'; 
import Sound from './components/Sound'; 
import Store from './components/Store';
import About from './components/About';

function App() {
  const [page,setPage] = useState('Work')
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  const renderPage = () => {
    switch (page) {
      case 'Work':
        return <Work />;
      case 'Sound':
        return <Sound />;
      case 'Store':
        return <Store />;
      case 'About':
        return <About />;
      default:
        return <Work />;
    }
  };

  return (
    <>
      <nav id="nav-container">
      <i><p id="name">Ethan Chen</p></i>
        <div>
          <ul id="nav-items">
            <li>
              <button className="nav-button" onClick={() => handlePageChange('Work')}>Work</button>
            </li>
            <li>
              <button className="nav-button" onClick={() => handlePageChange('Sound')}>Sound</button>
            </li>
            <li>
              <button className="nav-button" onClick={() => handlePageChange('Store')}>Store</button>
            </li>
            <li>
              <button className="nav-button" onClick={() => handlePageChange('About')}>About</button>
            </li>
          </ul>
        </div>
      </nav>
      {renderPage()}
    </>
  )
}

export default App