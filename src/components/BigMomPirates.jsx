import { useNavigate } from "react-router-dom";

export default function BigMomPirates() {
  const navigate = useNavigate();

  return (
    <div className="emperorContainer">
      <h3>Big Mom Pirates</h3>
      <h5>Charlotte Lin Lin</h5>
      <img src="CharlotteLinlin.webp" alt="Linlin" />
      <br />
      <img src="BigMomPirates.webp" alt="Big Mom Pirates" />
      <br />
      <button onClick={() => navigate("/newgate")}>⟵</button>
      <button onClick={() => navigate("/kaidou")}>⟶</button>
    </div>
  );
}
