import Parent from './props/Parent';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';
import EventComponent from './events/EventComponent';
import { Container } from './index.styled';
import FocusedUserSearch from './refs/UserSearch';

const App = () => (
  <Container>
    <Parent />
    <UserSearch />
    <GuestList />
    <EventComponent />
    <FocusedUserSearch />
  </Container>
);

export default App;
