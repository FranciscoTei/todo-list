const FormSelect = ({ inputName, options, onChange, ...props }) => (
  <div className="form-input">
    <label htmlFor={props.id}>{inputName}:</label>
    <select id={props.id} onChange={onChange} {...props}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default FormSelect;
