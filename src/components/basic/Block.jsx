export default function Block(props) {
  return (
    <div className="bg-sub border-4 border-black p-10 rounded shadow">
      {props.children}
    </div>
  );
}
