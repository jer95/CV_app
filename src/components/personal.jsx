import { useState } from "react";
import "../index.css";

export function Personal({ formData, setFormData }) {
  const [isActive, setActive] = useState(false);

  const personal = ["Full Name", "Email", "Phone Number", "Address"];

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
          <h3 className="drop-header">Personal</h3>
          <i
            onClick={handleButtonClick}
            className={`fa-solid fa-arrow-down`}
          ></i>
        </div>
        <div className={isActive ? `flex-column` : `hide`}>
          {personal.map((label) => {
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
      </div>
    </>
  );
}
