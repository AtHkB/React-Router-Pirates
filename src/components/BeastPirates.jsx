import { useNavigate } from "react-router-dom";

export default function BeastPirates() {
  const navigate = useNavigate();

  return (
    <div className="emperorContainer">
      <h3>Beast Pirates</h3>
      <h5>Kaidou</h5>
      <img src="Kaidou.webp" alt="kaidou" />
      <br />
      <img src="BeastsPirates.webp" alt="Beasts Pirates" />
      <br />
      <button onClick={() => navigate("/linlin")}>⟵</button>
      <button onClick={() => navigate("/shanks")}>⟶</button>
    </div>
  );
}
