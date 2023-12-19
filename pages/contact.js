import React, { useState } from "react";
import Text from "@/lib/ui/form-elements/text-input";
import Select from "@select-dropdown";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    parentName: "",
    learnerName: "",
    grade: "",
    agreement: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbz0sMkn6MUQ6o-DIEewvev6Y-t140kGk8eqGC69pXs2bdY4LS9mVF_TYgZQjNX52f_67g/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          mode: "no-cors",
        }
      );
      if (response.ok) {
        // Handle successful response
        console.log("Form data submitted successfully!");
      } else {
        // Handle error response
        console.error("Failed to submit form data");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error submitting form data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <div className="section" style={{ backgroundColor: "maroon" }}>
        <div className="section-content">
          <div
            className="padding-top_large"
            style={{ backgroundColor: "white" }}
          >
            <form onSubmit={handleSubmit}>
              <div className="">
                <Text
                  label="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Text
                  label="Parent Name"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                />
                <Text
                  label="Learner Name"
                  name="learnerName"
                  value={formData.learnerName}
                  onChange={handleChange}
                />
                <Text
                  label="Grade"
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                />
                <Select
                  label="By signing this agreement you acknowledge receipt of the financial letter and agree to all terms."
                  name="agreement"
                  value={formData.agreement}
                  onChange={handleChange}
                  options={[
                    {
                      label: "I do agree",
                      value: "agree",
                    },
                    {
                      label: "I disagree",
                      value: "disagree",
                    },
                  ]}
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
