import "./App.css";
import NavigationBar from './components/NavigationBar/NavigationBar';
import LoginSignupContainer from "./components/loginSignupContainer/loginSignupContainer";

const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <LoginSignupContainer/>
    </div>
  );
};

export default App;