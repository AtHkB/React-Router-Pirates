import { useNavigate } from "react-router-dom";

export default function RedHairPirates() {
  const navigate = useNavigate();

  return (
    <div className="emperorContainer">
      <h3>Red Hair Pirates</h3>
      <h5>Shanks</h5>
      <img src="Shanks.webp" alt="Shanks" />
      <br />
      <img src="RedHairPirates.webp" alt="Red Hair Pirates" />
      <br />
      <button onClick={() => navigate("/kaidou")}>⟵</button>
      <button onClick={() => navigate("/newgate")}>⟶</button>
    </div>
  );
}
