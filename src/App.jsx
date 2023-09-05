import "./App.css";
import BeastPirates from "./components/BeastPirates";
import BigMomPirates from "./components/BigMomPirates";
import FourEmperors from "./components/FourEmperors";
import { Routes, Route } from "react-router-dom";
import RedHairPirates from "./components/RedHairPirates";
import WhiteBeardPirates from "./components/WhiteBeardPirates";
import Navbar from "./components/Navbar";
import ErrorPage from "./components/ErrorPage";
import StrawHatCrew from "./components/StrawHatCrew";
import StrawHatsMember from "./components/StrawHatsMember";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<FourEmperors />} />
        <Route path="linlin" element={<BigMomPirates />} />
        <Route path="kaidou" element={<BeastPirates />} />
        <Route path="shanks" element={<RedHairPirates />} />
        <Route path="newgate" element={<WhiteBeardPirates />} />
        <Route path="strawhats" element={<StrawHatCrew />} />
        <Route path="strawhats/:id" element={<StrawHatsMember />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
