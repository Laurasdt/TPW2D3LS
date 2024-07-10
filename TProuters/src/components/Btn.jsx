import { Link } from "react-router-dom";

function Btn() {
  return (
    <Link to={`/details`}>
      <button>View</button>
    </Link>
  );
}

export default Btn;
