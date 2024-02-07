import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Home, About, Projects, Contact } from './pages'
import { NavigationProvider } from './components/NavigationContext'; // Import the context provider

function App() {
  return <main className="bg-neutral-300	">
    <Router>
    <NavigationProvider> {/* Wrap your component tree with the context provider */}

        <NavBar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/contact" element={<Contact />}/>
        </Routes>
        </NavigationProvider>

    </Router>
  </main>;
}

export default App;
