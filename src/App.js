import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Board } from './pages/Board/Board';
import { WriteArticle } from './pages/WriteArticle/WriteArticle';
import { ViewArticle } from './pages/ViewArticle/ViewArticle';
import { Edit } from './pages/Edit/Edit'
import { Footer } from './components/Footer/Footer';
function App() {


  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path='/board'>
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
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
