import BigMomPirates from "./BigMomPirates";
import BeastsPirates from "./BeastPirates";
import RedHairPirates from "./RedHairPirates";
import WhiteBeardPirates from "./WhiteBeardPirates";

export default function FourEmperors() {
  return (
    <div>
      <h2>All 4 Emperors:</h2>
      <div className="container">
        <BigMomPirates />
        <BeastsPirates />
        <RedHairPirates />
        <WhiteBeardPirates />
      </div>
    </div>
  );
}
