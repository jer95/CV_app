import { useState } from "react";
import "../index.css";

export function Experience({ formData, setFormData }) {
  const [isActive, setActive] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [expEntries, setExpEntries] = useState([]);
  const experience = [
    "Company Name",
    "Position Title",
    "Start Date",
    "End Date",
    "Location",
  ];
  const [expInput, setExpInput] = useState({
    "Company Name": "",
    "Position Title": "",
    "Start Date": "",
    "End Date": "",
    Location: "",
  });

  function handleOnChange(e) {
    const { name, value } = e.target;
    setExpInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function handleButtonClick() {
    setActive((previous) => !previous);
  }
  function saveEntry() {
    // require fields to be filled
    const isValid = experience.every((label) => expInput[label]);
    if (!isValid) {
      alert("Please Fill All Required Fields.");
      return;
    }
    console.log(isValid);
    setFormData((prev) => ({
      ...prev,
      experience: [...prev.experience, expInput],
    }));
    setFormVisible(false);
    setExpInput({
      "Company Name": "",
      "Position Title": "",
      "Start Date": "",
      "End Date": "",
      Location: "",
    });
    setExpEntries((prev) => [...prev, expInput]);
    console.log(formData);
  }
  function addEntry() {
    setFormVisible(true);
  }
  function trashEntry(e) {
    const entryIndex = Number(e.target.dataset.index);
    const updatedEntries = formData.experience.filter((_, index) => {
      return index !== entryIndex;
    });
    setFormData((prev) => ({
      ...prev,
      experience: [...updatedEntries],
    }));
    setExpEntries([...updatedEntries]);
  }
  function editEntry(e) {
    const index = e.target.dataset.index;
    setExpInput(expEntries[index]);
    setFormVisible(true);
    trashEntry(e);
  }
  return (
    <>
      <div className="wrapper flex-column">
        <div className={`dropdown flex-row`}>
          <h3 className="drop-header">Experience</h3>
          <i
            onClick={handleButtonClick}
            className={`fa-solid fa-arrow-down`}
            id="experience"
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
              {experience.map((label) => {
                return (
                  <div className={`input-container flex-column`}>
                    <label>{label}</label>
                    <input
                      onChange={handleOnChange}
                      name={label}
                      value={expInput[label]}
                    />
                  </div>
                );
              })}
              <button onClick={saveEntry} className="add">
                Add
              </button>
            </div>
          )}
          {formData.experience.length > 0 && (
            <div>
              {formData.experience.map((entry, index) => (
                <>
                  <div className="flex-row entries">
                    {entry["Company Name"]}
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
