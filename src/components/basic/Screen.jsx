export default function Screen(props) {
  return (
    <div className="w-full h-full grid place-content-center">
      {props.children}
    </div>
  );
}
