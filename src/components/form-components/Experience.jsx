import SubmitButton from './SubmitButton.jsx'
import Inputs from './Inputs.jsx'
import '../../css/Form.css'

function Experience({ 
  isEditing, 
  setIsEditing,
  experience,
  setExperience
}) {

  const fields = [
    { key: "companyName", label: "Company Name" },
    { key: "positionTitle", label: "Position Title" },
  ];

  return (
    <div className="section">
      <Inputs
        className="grid-cols-1 lg:grid-cols-2"
        fields={fields}
        values={experience}
        setValues={setExperience}
      >
        <textarea 
          placeholder="Responsibilities"
          className="input overflow-hidden"
        />
        <div className="flex flex-row gap-5 justify-between">
          <input 
            placeholder="Start Date"
            className="input self-start w-1/2"
          />
          <input 
            placeholder="End Date"
            className="input self-start w-1/2"
          />
        </div>
      </Inputs>

      <SubmitButton />
    </div>
    
  );
}

export default Experience;
