import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Dark mode has been disabled', 'success');
    }
  };
  return (
    <>
      <Navbar
        title="Text Utils"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <TextForm
        heading="Enter the text to analyze below"
        mode={mode}
        showAlert={showAlert}
      />
      {/* <About /> */}
    </>
  );
}

export default App;
