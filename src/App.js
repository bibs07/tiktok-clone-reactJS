import "./App.css";
import { Video } from "./components/Video";

function App() {
  return (
    <div className="app">
      <div className="videos">
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
