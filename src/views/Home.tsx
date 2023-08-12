// import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <p>HOME</p>
        <h1 onClick={() => navigate("../discover/123")}>
          to discover by useNavigate
        </h1>
      </div>
    </>
  );
}
