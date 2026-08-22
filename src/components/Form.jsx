// TODO
// - add an empty placeholder for no input fields

import { useState } from "react";
import editButton from '../assets/edit-button.svg';
import GeneralInformation from './form-components/GeneralInformation.jsx';
import Education from './form-components/Education.jsx';
import Experience from './form-components/Experience.jsx'

function Section({ children, subheading, className }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <div className="flex flex-row pb-3 gap-5 pl-0.5 items-center">
        <h1 className="form-subheading">{subheading}</h1>
        {!isEditing && (
          <button 
            className="size-7 edit-button pb-8"
            onClick={() => setIsEditing(true)}
          >
            <img 
              src={editButton}
              alt="Edit"
            />
          </button>
        )}
      </div> 

      <div className={`flex flex-col ${className}`}>
        {children({ isEditing, setIsEditing })} 
      </div> 
    </div>
  );
}

function Form() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [education, setEducation] = useState({});
  const [experience, setExperience] = useState({});

  return (
    <div className="form">
      <Section subheading="General Information">
        {({ isEditing, setIsEditing }) => (
          <GeneralInformation
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            generalInfo={generalInfo}
            setGeneralInfo={setGeneralInfo}
          />
        )}
      </Section>
      
      <Section subheading="Education">
        {({ isEditing, setIsEditing }) => (
          <Education
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            education={education}
            setEducation={setEducation}
          />
        )}
      </Section>

      <Section subheading="Experience">
        {({ isEditing, setIsEditing }) => (
          <Experience
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            experience={experience}
            setExperience={setExperience}
          />
        )}
      </Section>
    </div>
  );
}

export default Form;
