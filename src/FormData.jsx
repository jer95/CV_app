export { Personal, Education, Experience };
import { useState } from "react";
import "./index.css";

function Personal({ formData, setFormData, isActive, setActive }) {
  const personal = ["fullname", "email", "phonenumber", "address"];

  function handleOnChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      personal: { ...prev.personal, [name]: value },
    }));
  }
  function handleButtonClick() {
    setActive((previous) => !previous);
  }
  return (
    <>
      <div className="wrapper flex-column">
        <div className={`dropdown flex-row`}>
          Personal Details
          <i
            onClick={handleButtonClick}
            className={`fa-solid fa-arrow-down`}
          ></i>
        </div>
      </div>
      <div className={isActive ? `pd-form flex-column` : `hide`}>
        {personal.map((label) => {
          console.log(formData.personal[label]);
          return (
            <div className={`input-container flex-column`}>
              <label>{label}</label>
              <input
                onChange={handleOnChange}
                name={label}
                value={formData.personal[label]}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
function Education() {
  const [isActive, setActive] = useState(false);
  const personal = ["Full Name", "Email", "Phone Number", "Address"];

  function handleButtonClick(e) {
    setActive((previous) => !previous);
  }
  return (
    <>
      <div className="wrapper flex-column">
        <div className={`dropdown flex-row`}>
          Education
          <i
            onClick={handleButtonClick}
            className={`fa-solid fa-arrow-down`}
            id="education"
          ></i>
        </div>
        <div className={isActive ? `edu-form flex-column` : `hide`}>
          {personal.map((label) => {
            return (
              <div className={`input-container flex-column`}>
                <label>{label}</label>
                <input />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

function Experience() {
  const [isActive, setActive] = useState(false);
  const experience = [
    "Company Name",
    "Position Title",
    "Start Date",
    "End Date",
    "Location",
  ];
  function handleButtonClick(e) {
    setActive((previous) => !previous);
  }
  return (
    <div className="wrapper flex-column">
      <div className={`dropdown flex-row`}>
        Experience
        <i
          onClick={handleButtonClick}
          className={`fa-solid fa-arrow-down`}
          id="experience"
        ></i>
      </div>
      <div className={isActive ? `exp-form flex-column` : `hide`}>
        {experience.map((label) => {
          return (
            <div className={`input-container flex-column`}>
              <label>{label}</label>
              <input />
            </div>
          );
        })}
      </div>
    </div>
  );
}
