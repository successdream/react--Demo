
function Square(props) {
  return (
    <button className="square"  onClick={props.onClick}>
      { props.value.value }
    </button>
  );
}
export default Square;