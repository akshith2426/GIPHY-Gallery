import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Alert from "./components/layouts/Alert";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import { GiphyProvider } from "./context/giphy/GiphyContext"
import {AlertProvider} from "./context/alert/AlertContext"
function App() {
  return (
    <GiphyProvider >
    <AlertProvider>
      <Router>
        {/* justify-between style was present */}
        <div className="flex flex-col  h-screen">
          <Navbar />
            <main className="container mx-auto px-3 pb-12">
            <Alert/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/*" element={<NotFound/>}/>
            </Routes>
          </main>
        </div>
      </Router>
    </AlertProvider>
    </GiphyProvider >
  );
}

export default App;
