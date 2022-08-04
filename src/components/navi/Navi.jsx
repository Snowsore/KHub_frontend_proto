import NaviButton from "./NaviButton";

export default function Navi(props) {
  return (
    <div className="absolute flex w-full bg-sub">
      <NaviButton to="/about">About</NaviButton>
      <NaviButton to="/go">GoGoSing</NaviButton>
    </div>
  );
}
