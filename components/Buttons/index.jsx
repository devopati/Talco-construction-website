import "./index.css";
const Button = (props) => {
  return (
    <button
      className={`shortcut-button ${props.style}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};
export { Button };
