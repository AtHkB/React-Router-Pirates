import { Link } from "react-router-dom";
import data from "../../data.json";

export default function StrawHatsCrew() {
  // console.log(data.pirates);
  return (
    <div className="container">
      <div className="flag-container">
        <img src="/StrawHatPirates.webp" alt="Straw Hats" id="banner" />
      </div>

      {/* We map through the data to render ALL members */}
      {data &&
        data.pirates.map((pirate) => (
          <div className="straw" key={pirate.id}>
            <Link to={`/strawhats/${pirate.id}`}>
              <h3>Name: {pirate.name}</h3>
            </Link>
            <img src={pirate.image} alt={pirate.name} />
          </div>
        ))}
    </div>
  );
}
