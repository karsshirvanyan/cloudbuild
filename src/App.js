import logo from './logo.svg';
import LoginButton from './components/loginbutton';
import LogoutButton from './components/logoutbutton';
import Profile from './components/profile';
import './App.css';


function App() {
  return (
    <>
      <div>
        <LoginButton></LoginButton>
      </div>
      <div>
        <LogoutButton></LogoutButton>
      </div>
      <div>
        <Profile></Profile>
      </div>
    </>
  );
}

export default App;
