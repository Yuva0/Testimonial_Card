import "./App.css";
import Card from "./components/Card/Card.tsx"

function App() {
  return (
    <div className="app">
      <Card/>

      <div class="credits" data-gfe-screenshot-exclude="true">
        A challenge by &nbsp;
        <a href="https://www.greatfrontend.com/projects?ref=challenges">
          GreatFrontEnd Projects
        </a>
        . Built by &nbsp;
        <a href="https://www.greatfrontend.com/projects/u/username">
          Tanuj Sengupta
        </a>
        .
      </div>
    </div>
  );
}

export default App;
