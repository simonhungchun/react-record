import { useParams, useNavigate } from "react-router-dom";
export default function Discover() {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
  return (
    <>
      {/* <Link to="/home">to home</Link> */}
      <div>Discover Page</div>
      <div>id: {params.id}</div>
      <button onClick={() => navigate("/mine?id=1&count=10")}>
        跳转到mine页面
      </button>
    </>
  );
}
