import { Routes, Route } from "react-router-dom";
import Upload from "./Upload";
import Email from "./Email";
import Boot from "./Boot";
import TestService from "./TestService";

function App() {
  return (
    <div className="mt-5">
      <Routes>
        <Route path="/" element={<Boot />} />
        <Route path="upload" element={<Upload />} />
        <Route path="mail" element={<Email />} />
        <Route path="service" element={<TestService />} />
      </Routes>
    </div>
  );
}

export default App;
