import { Link } from "react-router-dom";

export default function NaviButton(props) {
  return (
    <Link to={props.to}>
      <div className="w-20 h-10 border border-black grid place-content-center">
        {props.children}
      </div>
    </Link>
  );
}
