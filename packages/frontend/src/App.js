import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import {
  Profile,
  Dashboard,
  Analytics,
  HostEventForm,
  Communities,
  Events,
  MyParticipations,
  MyCommunities,
  CreateCommunity,
} from './Pages';
import { NavigationWrapper, HomeNavigationWrapper } from './WrapperComponents';
import './App.css';
import AppRouter from './AppRouter';

function App() {
  return (
    <div className="app-container">
      <AppRouter />
    </div>
  );
}

export default App;
