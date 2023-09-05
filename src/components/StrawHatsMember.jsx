import { useParams, useNavigate } from "react-router-dom";
import data from "../../data.json";

export default function StrawHatsMember() {
  const { id } = useParams();

  const navigate = useNavigate();

  const oneMember = data.pirates.find((el) => el.id === parseInt(id, 10));

  //   console.log(oneMember);

  return (
    <div className="singleMember">
      <h1>{oneMember.name}</h1>
      <img src={`/${oneMember.image}`} />
      <br />
      <button onClick={() => navigate("/strawhats")}>
        Back to all members
      </button>
    </div>
  );
}
