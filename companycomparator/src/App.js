import React from 'react';
import './styles/App.css'
import Form from './components/Form'
import Chart from './components/Chart'

function App() {

  return (
    <div>
      <h1 className="title">Company Indicies Comparator</h1>
      <h3 className="desc">Created by fMatheus7</h3>
      <div className="form-wrapper">
        <Form />
        <Form />
      </div>
    </div>
  );
}

export default App;
