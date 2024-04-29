import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ParentDetailsMother from "@/lib/ui/day-scholar-form-components/parentDetailsMother/parentdetailsmother";
import ParentDetailsFather from "@/lib/ui/day-scholar-form-components/parentDetailsFather/parentdetailsfather";
import AddressInformation from "@/lib/ui/day-scholar-form-components/address/address";
import LearnerInformation from "@/lib/ui/day-scholar-form-components/learnerInformation/learnerinformation";
import ContactPresentSchool from "@/lib/ui/day-scholar-form-components/learnerInformation/contactpresentschool";

const FormDisplay = () => {
  const router = useRouter();
  const { id } = router.query;
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    // Fetch form data based on the form ID from S3 bucket or your preferred storage
    const fetchFormData = async () => {
      try {
        // Perform fetch request to fetch form data based on id
        // Replace the placeholder URL with your actual S3 bucket URL
        const response = await fetch(
          `https://lsbekker.s3.eu-north-1.amazonaws.com/forms/day-scholar/${id}/${id}.json`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch form data");
        }
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error("Error fetching form data:", error);
        // Handle error, e.g., display an error message to the user
      }
    };
    if (id) {
      fetchFormData();
    }
  }, [id]);

  if (!formData) {
    return <div>Loading...</div>;
  }

  // Function to disable form fields
  const isFieldDisabled = true; // Set this to true to disable form fields

  return (
    <>
      <div className="section">
        <div className="section-content grid grid-wrap grid-align_vertical-center">
          <div>
            <h1 className="color-maroon padding-top_large padding-bottom_large medium-padding-left_large ">
              Parent/Legal Guardian/Proxy Information
            </h1>
            <ParentDetailsMother
              data={formData.ParentDetailsMother.Information}
              disabled={isFieldDisabled}
            />
            <AddressInformation
              data={formData.ParentDetailsMother.AddressInformation}
              disabled={isFieldDisabled}
            />
          </div>
          <div>
            {formData.ParentDetailsMother.Information &&
              (formData.ParentDetailsMother.Information.Status === "Parent" ||
              formData.ParentDetailsMother.Information.IfNotParent === "Yes" ? (
                <div>
                  <h1 className="color-maroon padding-top_large padding-bottom_large medium-padding-left_large ">
                    Second Parent Details
                  </h1>
                  <ParentDetailsFather
                    data={formData.ParentDetailsFather.information}
                    disabled={isFieldDisabled}
                  />
                  <AddressInformation
                    data={formData.ParentDetailsFather.AddressInformation}
                    disabled={isFieldDisabled}
                  />
                </div>
              ) : null)}
          </div>
          <div className="">
            <LearnerInformation
              data={formData.LearnerInformation}
              disabled={isFieldDisabled}
            />
          </div>

          <div className="size_1-of-1">
            <ContactPresentSchool
              data={formData.ContactPresentSchool.Information}
              disabled={isFieldDisabled}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormDisplay;
