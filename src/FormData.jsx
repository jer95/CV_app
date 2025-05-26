import "./index.css";
import { Header } from "./App";
/* Add edge cases for buttons (e.g make sure empty entries don't submit.) */

function Entries({ formData, id }) {
  if (id == "education") {
    return formData.education.map((currentEntry) => {
      return (
        <>
          <div className="flex-row gap">
            <p className="form-font">
              {currentEntry["Start Date"]} - {currentEntry["End Date"]}
              <em>{currentEntry.Location}</em>
            </p>
            <p className={`form-font`}>
              <strong>{currentEntry.School}</strong>
              <span>{currentEntry.Degree}</span>
            </p>
          </div>
        </>
      );
    });
  }
  if (id == "experience") {
    return formData.experience.map((currentEntry) => {
      return (
        <>
          <div className="flex-row gap">
            <p className="form-font flex-column">
              {currentEntry["Start Date"]} - {currentEntry["End Date"]}
              <em>{currentEntry.Location}</em>
            </p>
            <p className={`form-font flex-column`}>
              <strong>{currentEntry["Company Name"]}</strong>
              <span>{currentEntry["Position Title"]}</span>
              <span>{currentEntry.Description}</span>
            </p>
          </div>
        </>
      );
    });
  }
}

export function FormPreview({ formData, setFormData }) {
  return (
    <>
      <div className={`cv-container flex-column`}>
        <Header
          fullname={formData.personal["Full Name"]}
          email={formData.personal.Email}
          phonenumber={formData.personal["Phone Number"]}
          address={formData.personal.Address}
        />
        <div className="form-container">
          <h2 className="education">Education</h2>
          <div className={`flex-column`}>
            <Entries
              formData={formData}
              setFormData={setFormData}
              id="education"
            />
          </div>
        </div>
        <div className="form-container">
          <h2 className="experience">Personal Experience</h2>
          <Entries
            formData={formData}
            setFormData={setFormData}
            id="experience"
          />
        </div>
      </div>
    </>
  );
}
