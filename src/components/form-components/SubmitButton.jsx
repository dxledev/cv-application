import '../../css/Form.css'

function SubmitButton({ onClick }) {
  return (
    <button 
      className="submit"
      onClick={onClick}
    >
      Submit
    </button>
  );
}

export default SubmitButton;
