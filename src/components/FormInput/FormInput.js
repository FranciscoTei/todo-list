import "./FormInput.css";

const FormInput = ({ inputName, onChange, ...props }) => {
  return (
    <div className="form-input">
      <label htmlFor={props.id}>{inputName}:</label>
      <input type={props.type} onChange={onChange} {...props}></input>
    </div>
  );
};

export default FormInput;
