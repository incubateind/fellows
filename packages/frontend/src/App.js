import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Profile, Dashboard, Analytics, HostEventForm, Communities, Events, MyParticipations, MyCommunities, CreateCommunity } from './Pages';
import { NavigationWrapper, HomeNavigationWrapper } from './WrapperComponents';
import './App.css';


function App() {
  return (
    <HashRouter>
      <Switch>
        <Redirect from='/' to='/home' exact/>

        <Route exact path='/home'>
          <HomeNavigationWrapper><Profile/></HomeNavigationWrapper>
        </Route>

        <NavigationWrapper>
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/analytics' component={Analytics}/>
          <Route exact path='/host_event_form' component={HostEventForm}/>
          <Route exact path='/communities' component={Communities}/>
          <Route exact path='/events' component={Events}/>
          <Route exact path='/my_participations' component={MyParticipations}/>
          <Route exact path='/my_communities' component={MyCommunities}/>
          <Route exact path='/create_community' component={CreateCommunity}/>
        </NavigationWrapper>
        
      </Switch>
    </HashRouter>
  );
}


export default App;