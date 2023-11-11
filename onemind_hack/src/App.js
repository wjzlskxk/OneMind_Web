import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import GoogleSignUp from "./components/GoogleSignUp/GoogleSignUp";
import BrowserMap from "./components/Map/BrowerMap";
import MobileMap from "./components/Map/MobileMap";
import Like from "./components/Like/Like";
import AddSchedule from "./components/Schedule/AddSchedule";
import CheckSchedule from "./components/Schedule/CheckSchedule";
import EditSchedule from "./components/Schedule/EditSchedule";
import ShowSchedule from "./components/Schedule/ShowSchedule";
import EditDummy from "./components/Schedule/EditDummy";
function App() {
  return (
    <div className="App">
      <BrowserView>
        <BrowserMap />
      </BrowserView>
      <MobileView>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MobileMap />} />
            <Route path="/like" element={<Like />} />
            <Route path="/schedule/add" element={<AddSchedule />} />
            <Route path="/schedule/check" element={<CheckSchedule />} />
            <Route path="/schedule/edit" element={<EditSchedule />} />
            <Route path="/schedule/show" element={<ShowSchedule />} />
            <Route path="/schedule/show2" element={<EditDummy />} />
          </Routes>
        </BrowserRouter>
      </MobileView>
    </div>
  );
}

export default App;
