import '../../css/Form.css'

function Inputs({ 
  children, 
  fields, 
  className,
  values,
  setValues,
}) {
  return (
    <div className={`grid text-2xl gap-5 ${className}`}>
      {fields.map((field) => (
        <input
          key={field.key}
          placeholder={field.label}
          className="input"
          value={values[field.key] || ""}
          onChange={(e) =>
            setValues({
              ...values,
              [field.key]: e.target.value,
            })
          }
        />
      ))}
      {children}
    </div>
  );
}

export default Inputs;
