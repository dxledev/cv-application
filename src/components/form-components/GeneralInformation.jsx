import Inputs from './Inputs.jsx';
import SubmitButton from './SubmitButton.jsx';
import '../../css/Form.css'

function GeneralInformation({ 
  isEditing,
  setIsEditing,
  generalInfo,
  setGeneralInfo
}) {
  const fields = [
    { key: "firstName", label: "First Name" },
    { key: "middleName", label: "Middle Name" },
    { key: "lastName", label: "Last Name" },
    { key: "email", label: "Email" },
    { key: "phoneNumber", label: "Phone Number"},
  ];

  function handleSubmit() {
    setIsEditing(false);
  }

  const isEmpty = Object.keys(generalInfo).length === 0;

  return (
    <div className="section">
      {isEditing && (
        <Inputs
          className="grid-cols-1 lg:grid-cols-3"
          fields={fields}
          values={generalInfo}
          setValues={setGeneralInfo}
        />
      )}
      {isEditing && (
        <SubmitButton
          onClick={handleSubmit}
        />
      )}

      {/* Show placeholder here when it's empty */}
      {(isEmpty && !isEditing) && (
        <EmptyPlaceholder />
      )}

      {!isEmpty && (
        <GeneralInformationPreview generalInfo={generalInfo} />
      )}
    </div>
  );
}

function EmptyPlaceholder() {
  return (
    <div className='placeholder'>
      <h1>Click the edit button to input your information.</h1>  
    </div>
  );
}

function GeneralInformationPreview({
  generalInfo,
}) {
  
  const {
    firstName,
    middleName,
    lastName,
    email,
    phoneNumber
  } = generalInfo;

  return (
    <div>
      <h1>
        {firstName} {middleName} {lastName}
      </h1>

      <p>{email}</p>
      <p>{phoneNumber}</p>
    </div>
  );
}

export default GeneralInformation;
