import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Header from './components/Common/Header/Header.component';
import Footer from './components/Common/Footer/Footer.component';
import HomePage from './pages/Home/HomePage.component';
import NotFound from './components/NotFound/notfound.component';
import TeamsContextProvider from './contexts/TeamsContext';
import PlayersContextProvider from './contexts/PlayersContext';
import Teams from './pages/Teams/Teams.component';
import TeamsDetail from './pages/TeamsDetail/TeamsDetail.component';
import "./../src/assets/css/styles.css";

const App = () => (
  <BrowserRouter>
    <Header />
    <Container maxWidth="lg" className="main-container">
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/conference/:conf'>
          <TeamsContextProvider>
            <Teams />
          </TeamsContextProvider>
        </Route>
        <Route path='/team/:teamid'>
          <PlayersContextProvider>
            <TeamsDetail />
          </PlayersContextProvider>
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Container>
    <Footer />
  </BrowserRouter>
)

export default App;
