import { useNavigate } from "react-router-dom";

export default function WhiteBeardPirates() {
  const navigate = useNavigate();

  return (
    <div className="emperorContainer">
      <h3>White Beard Pirates</h3>
      <h5>Edward Newgate</h5>
      <img src="EdwardNewgate.webp" alt="Newgate" />
      <br />
      <img src="WhiteBeardPirates.webp" alt="White Beard Pirates" />
      <br />
      <button onClick={() => navigate("/shanks")}>⟵</button>
      <button onClick={() => navigate("/linlin")}>⟶</button>
    </div>
  );
}
