import React from 'react';
import './App.css';
import {Button , Card , ListGroup , ListGroupItem} from 'react-bootstrap'
import News from './Componsnts/News/News';
import Header from './Componsnts/Header/Header';
import TopHeadline from './Componsnts/TopHeadline/TopHeadline';
import Fragment from './Componsnts/Fragment/Fragment';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="buttons">
        <h2>React bootstrap</h2>
        <Button variant="primary">Primary</Button>{' '}
        <Button variant="warning">warning</Button>{' '}
      </div>
      <Fragment></Fragment>
      <TopHeadline></TopHeadline>


    </div>
  );
}

export default App;
