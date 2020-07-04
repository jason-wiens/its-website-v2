import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LeftSideBar from './components/side-bar-left/side-bar-left.component'
import RightSideBar from './components/side-bar-right/side-bar-right.component'
import MobileMenu from './components/mobile-menu/mobile-menu.component'
import HomePage from './pages/home/home.component'
import AboutPage from './pages/about/about.component'
import AiPage from './pages/ai/ai.component'
import BlockchainPage from './pages/blockchain/blockchain.component'
import RPAPage from './pages/rpa/rpa.component'
import ConsultingPage from './pages/consulting/consulting.component'
import ContactPage from './pages/contact/contact.component'
import Footer from './components/footer/footer.component'

import './App.scss';

const App = () => (
  <div className='app'>
    <LeftSideBar />
    <MobileMenu />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/about' component={AboutPage} />
      <Route path='/ai' component={AiPage} />
      <Route path='/rpa' component={RPAPage} />
      <Route path='/blockchain' component={BlockchainPage} />
      <Route path='/consulting' component={ConsultingPage} />
      <Route path='/contact' component={ContactPage} />
    </Switch>
    <RightSideBar />
  </div>
)

export default App;
