import SubmitButton from './SubmitButton.jsx'
import Inputs from './Inputs.jsx'
import '../../css/Form.css'

function Education({ 
  isEditing, 
  setIsEditing,
  education,
  setEducation
}) {
  const fields = [
    { key: "school", label: "School" },
    { key: "major", label: "Major" },
    { key: "fieldOfStudy", label: "Field of Study" },
    { key: "startDate", label: "Start Date" },
    { key: "endDate", label: "End Date" },
  ];

  return (
    <div className="section">
      <Inputs
        className="grid-cols-1 lg:grid-cols-3"
        fields={fields}
        values={education}
        setValues={setEducation}
      />
      <SubmitButton />
    </div>
  );
}

export default Education;
