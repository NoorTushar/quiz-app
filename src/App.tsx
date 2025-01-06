import "./App.css";
import { ModeToggle } from "./components/mode-toggle";
import Questions from "./components/Questions";

function App() {
   return (
      <>
         <div className="min-h-screen">
            <ModeToggle />
            <h1 className="text-4xl text-center my-10">Tushar's Quiz App</h1>

            <Questions />
         </div>
      </>
   );
}

export default App;
