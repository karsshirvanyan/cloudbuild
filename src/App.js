import logo from './logo.svg';
import LoginButton from './components/loginbutton';
import LogoutButton from './components/logoutbutton';
import Profile from './components/profile';
import './App.css';

function App() {
  return (
    <div>
      <div>
        <LoginButton/>
      </div>
      <div>
        <LogoutButton/>
      </div>
      <div>
        <Profile></Profile>
      </div>
    </div>

  );
}

export default App;
