const InputName = (props) => (
    <div>
      {props.title}{" "}
      <input
        value={props.set}
        onChange={(e) => props.handle(e.target.value)}
        placeholder={props.text}
      />
    </div>
  );
  export default InputName;
  