import React from 'react';
import './index.css';
import NavBar from './Navbar';
import TableKaryawan from './TableKaryawan';
import { Container } from 'react-bootstrap';
import './styles.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <h1>DATA KARYAWAN</h1>
        <TableKaryawan />
      </Container>
    </div>
  );
}

export default App;