import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import { HomeWrapper } from './views/Home/HomeWrapper';
import JobOffers from './views/JobOffers/JobOffers';
import MeetingDetailContainer from './views/MeetingDetail/MeetingDetailContainer';
import Navigation from './components/Navigation/Navigation';
import PageWrapper from './components/PageWrapper/PageWrapper';
import Schedule from './views/Schedule/Schedule';
import Speakers from './views/Speakers/Speakers';
import styled from 'styled-components';

const StyledAppWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

function App() {
  return (
    <StyledAppWrapper className='AppWrapperAll'>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <PageWrapper>
            <Route path='/jobOffers' component={JobOffers} />
            <Route path='/schedule' component={Schedule} />
            <Route path='/speakers' component={Speakers} />
            <Route
              path='/meetingDetail/:name'
              component={MeetingDetailContainer}
            />
            <Route path='/' component={HomeWrapper} exact />
          </PageWrapper>
        </Switch>
      </BrowserRouter>
      <Footer />
    </StyledAppWrapper>
  );
}

export default App;
