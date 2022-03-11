import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { Board } from './pages/Board/Board';
import { WriteArticle } from './pages/WriteArticle/WriteArticle';
import { ViewArticle } from './pages/ViewArticle/ViewArticle';
import { Edit } from './pages/Edit/Edit'
function App() {


  return (
    <div className='App'>
      React Board
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Board />
          </Route>
          <Route path='/writeArticle'>
            <WriteArticle/>
          </Route>
          <Route path='/viewArticle'>
            <ViewArticle/>
          </Route>
          <Route path='/edit'>
            <Edit/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
