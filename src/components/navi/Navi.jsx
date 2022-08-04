import NaviButton from "./NaviButton";

export default function Navi(props) {
  return (
    <div className="absolute flex w-full bg-sub">
      <NaviButton to="/go">GoGo</NaviButton>
      <NaviButton to="/go">GoGo</NaviButton>
      <NaviButton to="/go">GoGo</NaviButton>
      <NaviButton to="/go">GoGo</NaviButton>
    </div>
  );
}
