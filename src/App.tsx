import "./App.css";
import { ModeToggle } from "./components/mode-toggle";
import Questions from "./components/Questions";

function App() {
   return (
      <>
         <div className="min-h-screen">
            <ModeToggle />

            <Questions />
         </div>
      </>
   );
}

export default App;
