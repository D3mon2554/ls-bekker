import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ParentDetailsMother from "@/lib/ui/day-scholar-form-components/parentDetailsMother/parentdetailsmother";
import ParentDetailsFather from "@/lib/ui/day-scholar-form-components/parentDetailsFather/parentdetailsfather";
import AddressInformation from "@/lib/ui/day-scholar-form-components/address/address";
import LearnerInformation from "@/lib/ui/day-scholar-form-components/learnerInformation/learnerinformation";
import ContactPresentSchool from "@/lib/ui/day-scholar-form-components/learnerInformation/contactpresentschool";
import Button from "@/lib/ui/button/button";

export default function DayScholarApplication() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    // Initialize with default values if needed
    ParentDetailsMother: {
      Information: {
        firstName: "",
        lastName: "",
        RSACitizen: "",
        IfNo: "",
        IDNumber: "",
        HomeTel: "",
        WorkTel: "",
        CellNo: "",
        Email: "",
        Occupation: "",
        Employer: "",
        MaterialStatus: "",
        Status: "",
        IfNotParent: "",
      },
      AddressInformation: {
        homeAddress: "",
        HomeApartment: "",
        HomeCity: "",
        HomeProvince: "",
        HomeCountry: "",
        HomePostal: "",
        WorkAddress: "",
        WorkApartment: "",
        WorkCity: "",
        WorkProvince: "",
        WorkCountry: "",
        WorkPostal: "",
      },
    },
    ParentDetailsFather: {
      information: {
        firstName: "",
        lastName: "",
        IDNumber: "",
        HomeTel: "",
        WorkTel: "",
        CellNo: "",
        Email: "",
        Occupation: "",
        Employer: "",
        MaterialStatus: "",
      },
      AddressInformation: {
        homeAddress: "",
        HomeApartment: "",
        HomeCity: "",
        HomeProvince: "",
        HomeCountry: "",
        HomePostal: "",
        WorkAddress: "",
        WorkApartment: "",
        WorkCity: "",
        WorkProvince: "",
        WorkCountry: "",
        WorkPostal: "",
      },
    },
    LearnerInformation: [
      {
        Information: {
          firstName: "",
          lastName: "",
          IDNumber: "",
          PresentGrade: "",
          YearsIngGrade: "",
          PresentSchool: "",
        },
      },
    ],
    ContactPresentSchool: {
      Information: {
        firstName: "",
        ContactNumber: "",
        designation: "",
        firstName1: "",
        ContactNumber1: "",
        designation1: "",
      },
    },
    // ... other sections
  });

  // Function to save data to S3
  const saveToS3 = (data, id) => {
    // ... (your S3 save logic here)
  };

  // Function to generate the link
  const generateLink = (id) => {
    return `${process.env.NEXT_PUBLIC_BASE_URL}/day-scholar/${id}`;
  };

  const generateLinkAndSave = () => {
    // Assuming some form of ID is available
    const id = formData.ParentDetailsMother.IDNumber || "defaultId";

    // Save to S3
    const dataToSave = { ...formData, generatedLink: generateLink(id) };
    saveToS3(dataToSave, id);

    // Only generate the link if IDNumber is defined
    if (formData.ParentDetailsMother.IDNumber) {
      // Generate link
      const link = generateLink(id);

      // Log the generated link and data
      console.log("Generated link:", link);

      // Optionally, you can navigate to the link
      // router.push(link);
    }
  };

  useEffect(() => {
    console.log("Data to be saved:", formData);
  }, [formData]);

  const handleFormChange = (parent, category, field, value, index) => {
    setFormData((prevFormData) => {
      if (parent === "LearnerInformation" && category === "Information") {
        // Special handling for LearnerInformation
        const updatedLearnerInformation = [...prevFormData[parent]];
        updatedLearnerInformation[index] = {
          ...updatedLearnerInformation[index],
          Information: {
            ...updatedLearnerInformation[index].Information,
            [field]: value,
          },
        };

        return {
          ...prevFormData,
          [parent]: updatedLearnerInformation,
        };
      }

      return {
        ...prevFormData,
        [parent]: {
          ...prevFormData[parent],
          [category]: {
            ...prevFormData[parent][category],
            [field]: value,
          },
        },
        Status:
          parent === "ParentDetailsMother" && field === "Status"
            ? value
            : prevFormData[parent].Status,
        IfNotParent:
          parent === "ParentDetailsMother" && field === "IfNotParent"
            ? value
            : prevFormData[parent].IfNotParent,
      };
    });
  };

  const addLearner = () => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        LearnerInformation: [
          ...prevFormData.LearnerInformation,
          {
            Information: {
              firstName: "",
              lastName: "",
              IDNumber: "",
              PresentGrade: "",
              YearsIngGrade: "",
              PresentSchool: "",
            },
          },
        ],
      };
    });
  };
  const removeLearner = (index) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        LearnerInformation: prevFormData.LearnerInformation.filter(
          (learner, i) => i !== index
        ),
      };
    });
  };
  return (
    <>
      {/* ParentDetailsMother */}
      <div className="section">
        <div className="section-content grid grid-wrap grid-align_vertical-center">
          <div>
            <h1 className="color-maroon padding-top_large padding-bottom_large medium-padding-left_large ">
              Parent/Legal Guardian/Proxy Information
            </h1>
            <ParentDetailsMother
              data={formData.ParentDetailsMother}
              onDataChange={(field, value) =>
                handleFormChange(
                  "ParentDetailsMother",
                  "Information",
                  field,
                  value
                )
              }
            />
            <AddressInformation
              data={formData.ParentDetailsMother.AddressInformation}
              onDataChange={(field, value) =>
                handleFormChange(
                  "ParentDetailsMother",
                  "AddressInformation",
                  field,
                  value
                )
              }
            />
          </div>
          <div>
            {/* Parent details father */}

            {formData.ParentDetailsMother.Information.Status === "Parent" ||
            formData.ParentDetailsMother.Information.IfNotParent === "Yes" ? (
              <div>
                <h1 className="color-maroon padding-top_large padding-bottom_large medium-padding-left_large ">
                  Second Parent Details
                </h1>
                <ParentDetailsFather
                  data={formData.ParentDetailsFather}
                  onDataChange={(field, value) =>
                    handleFormChange(
                      "ParentDetailsFather",
                      "information",
                      field,
                      value
                    )
                  }
                />
                <AddressInformation
                  data={formData.ParentDetailsFather.AddressInformation}
                  onDataChange={(field, value) =>
                    handleFormChange(
                      "ParentDetailsFather",
                      "AddressInformation",
                      field,
                      value
                    )
                  }
                />
              </div>
            ) : null}
          </div>
          <div className="">
            <LearnerInformation
              data={formData.LearnerInformation}
              onDataChange={(index, field, value) =>
                handleFormChange(
                  "LearnerInformation",
                  "Information",
                  field,
                  value
                )
              }
              onAddLearner={addLearner}
              onRemoveLearner={removeLearner}
            />
          </div>

          <div className="size_1-of-1">
            <ContactPresentSchool
              data={formData.ContactPresentSchool}
              onDataChange={(field, value) =>
                handleFormChange(
                  "ContactPresentSchool",
                  "Information",
                  field,
                  value
                )
              }
            />
          </div>
        </div>
      </div>

      <Button label="Submit" variant="submit" onClick={generateLinkAndSave} />
    </>
  );
}
