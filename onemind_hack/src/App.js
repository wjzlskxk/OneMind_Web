import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import GoogleSignUp from "./components/GoogleSignUp/GoogleSignUp";
import Maps from "./components/Map/ShowMap";
import Schedule from "./components/Schedule/Schedule";
function App() {
  return (
    <div className="App">
      <BrowserView>
        <BrowserRouter>
          <Routes>
            <Route path="/map" element={<Maps />} />
            <Route path="signup" element={<GoogleSignUp />} />
          </Routes>
        </BrowserRouter>
      </BrowserView>
      <MobileView>
        <BrowserRouter>
          <Routes>
            <Route path="/map" element={<Maps />} />
            <Route path="signup" element={<GoogleSignUp />} />
          </Routes>
        </BrowserRouter>
      </MobileView>
    </div>
  );
}

export default App;
