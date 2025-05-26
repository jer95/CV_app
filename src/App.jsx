import { useState } from "react";
import { Personal } from "./components/personal";
import { Education } from "./components/education";
import { Experience } from "./components/experience";
import { FormPreview } from "./FormData";
/* finish Education and Experience components, may use submit button for those
 */

function App() {
  return (
    <>
      <h1 className={`main-header flex-row`}>CV-Application</h1>
      <AppForm />
    </>
  );
}
function AppForm() {
  const [formData, setFormData] = useState({
    personal: { "Full Name": "", Email: "", "Phone Number": "", Address: "" },
    education: [],
    experience: [],
  });
  return (
    <section className={`main-container`}>
      <div className={`drop-container flex-column`}>
        <Personal formData={formData} setFormData={setFormData} />
        <Education formData={formData} setFormData={setFormData} />
        <Experience formData={formData} setFormData={setFormData} />
      </div>
      <FormPreview formData={formData} setFormData={setFormData} />
    </section>
  );
}

export function Header({ fullname, email, address, phonenumber }) {
  return (
    <>
      <h1 className={`name-header personal-header flex-column`}>
        {fullname}
        <div className="flex-row">
          <p className={`personal-header form-header `}>{email}</p>
          <p className={`personal-header form-header`}>{phonenumber}</p>
          <p className={`personal-header form-header`}>{address}</p>
        </div>
      </h1>
    </>
  );
}
export default App;
