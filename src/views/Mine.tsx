import { useSearchParams } from "react-router-dom";
export default function Mine() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <div>Mine</div>
      <div>
        searchParams: {searchParams.get("id")}|{searchParams.get("count")}
      </div>
      <div
        onClick={() =>
          setSearchParams({
            id: "2",
            count: searchParams.get("count") as string,
          })
        }
      >
        id=2（复用当前组件）
      </div>
    </>
  );
}
