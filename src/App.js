import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Exercises from './pages/ExercisesPage/exercises';

import LandingPage from "./pages/LandingPage/landing";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/exercises" component={Exercises}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
