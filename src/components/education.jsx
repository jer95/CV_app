import { useState } from "react";
import "../index.css";
export function Education({ formData, setFormData }) {
  const education = ["School", "Degree", "Start Date", "End Date", "Location"];
  const [isActive, setActive] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [eduEntries, setEduEntries] = useState([]);

  const [eduInput, setEduInput] = useState({
    School: "",
    Degree: "",
    "Start Date": "",
    "End Date": "",
    Location: "",
  });
  function handleButtonClick() {
    setActive((previous) => !previous);
  }
  function handleOnChange(e) {
    const { name, value } = e.target;
    setEduInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function saveEntry() {
    // require fields to be filled
    const isValid = education.every((label) => eduInput[label]);
    if (!isValid) {
      alert("Please Fill All Required Fields.");
      return;
    }
    console.log(isValid);
    setFormData((prev) => ({
      ...prev,
      education: [...prev.education, eduInput],
    }));
    setFormVisible(false);
    setEduInput({
      School: "",
      Degree: "",
      "Start Date": "",
      "End Date": "",
      Location: "",
    });
    setEduEntries((prev) => [...prev, eduInput]);
    console.log(formData);
  }
  function addEntry() {
    setFormVisible(true);
  }
  function trashEntry(e) {
    const entryIndex = Number(e.target.dataset.index);
    const updatedEntries = formData.education.filter((_, index) => {
      return index !== entryIndex;
    });
    setFormData((prev) => ({
      ...prev,
      education: [...updatedEntries],
    }));
    setEduEntries([...updatedEntries]);
  }
  function editEntry(e) {
    const index = e.target.dataset.index;
    setEduInput(eduEntries[index]);
    setFormVisible(true);
    trashEntry(e);
  }
  return (
    <>
      <div className="wrapper flex-column">
        <div className={`dropdown flex-row`}>
          <h3 className="drop-header">Education</h3>
          <i
            onClick={handleButtonClick}
            className={`fa-solid fa-arrow-down`}
            id="education"
          ></i>
        </div>
        <div className={isActive ? "" : `hide`}>
          {!formVisible && (
            <button className="add" onClick={addEntry}>
              New Entry
            </button>
          )}
          {formVisible && (
            <div className="flex-column">
              {education.map((label) => {
                return (
                  <div className={`input-container flex-column`}>
                    <label>{label}</label>
                    <input
                      onChange={handleOnChange}
                      name={label}
                      value={eduInput[label]}
                    />
                  </div>
                );
              })}
              <button onClick={saveEntry} className="add">
                Add
              </button>
            </div>
          )}
          {formData.education.length > 0 && (
            <div>
              {formData.education.map((entry, index) => (
                <>
                  <div className="flex-row entries">
                    {entry["School"]}
                    <i
                      onClick={trashEntry}
                      data-index={index}
                      className="fa-solid fa-trash"
                    ></i>
                    <i
                      onClick={editEntry}
                      data-index={index}
                      className="fa-solid fa-pen-to-square"
                    ></i>
                  </div>
                </>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
