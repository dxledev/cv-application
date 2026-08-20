function Section({ children, subheading, className }) {
  return (
    <div>
      <div className="flex flex-col">
        <h1 className="form-subheading">{subheading}</h1>
      </div> 

      <div className={`flex flex-col ${className}`}>
        {children} 
      </div> 
    </div>
  );
}

function GeneralInformation() {
  return (
    <div className="section">
      <div className="grid grid-cols-1 lg:grid-cols-3 text-2xl gap-5">
        <input
          placeholder="First Name"
          className="input"
        />
        <input
          placeholder="Middle Name"
          className="input"
        />
        <input
          placeholder="Last Name"
          className="input"
        />
        <input 
          placeholder="Email"
          className="input"
        />
        <input 
          placeholder="Phone Number"
          className="input"
        />
      </div>

      <SubmitButton />
    </div>
  );
}

function Education() {
  return (
    <div className="section">
      <div className="grid grid-cols-1 lg:grid-cols-3 text-2xl gap-5">
        <input
          placeholder="School"
          className="input"
        />
        <input 
          placeholder="Major"
          className="input"
        />
        <input
          placeholder="Field of Study"
          className="input"
        />
        <input 
          placeholder="Start Date"
          className="input"
        />
        <input
          placeholder="End Date"
          className="input"
        />
      </div>
      <SubmitButton />
    </div>
  );
}

function Experience() {
  return (
    <div className="section">
      <div className="grid grid-cols-1 lg:grid-cols-2 text-2xl gap-5">
        <input 
          placeholder="Company Name"
          className="input"
        />
        <input 
          placeholder="Position Title"
          className="input"
        />
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
      </div>

      <SubmitButton />
    </div>
    
  );
}

function SubmitButton() {
  return (
    <button className="submit">
      Submit
    </button>
  );
}

function Form() {
  return (
    <div className="form">
      <Section subheading="General Information">
        <GeneralInformation />
      </Section>
      
      <Section subheading="Education">
        <Education />
      </Section>

      <Section subheading="Experience">
        <Experience />
      </Section>
    </div>
  );
}

export default Form;
