import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ParentDetailsMother from "@/lib/ui/day-scholar-form-components/parentDetailsMother/parentdetailsmother";
import ParentDetailsFather from "@/lib/ui/day-scholar-form-components/parentDetailsFather/parentdetailsfather";
import AddressInformation from "@/lib/ui/day-scholar-form-components/address/address";
import LearnerInformation from "@/lib/ui/day-scholar-form-components/learnerInformation/learnerinformation";
import ContactPresentSchool from "@/lib/ui/day-scholar-form-components/learnerInformation/contactpresentschool";
import MedicalInformation from "@/lib/ui/day-scholar-form-components/medical_information/medical_information";
import Button from "@/lib/ui/button/button";
import AWS from "aws-sdk";
import axios from "axios";
import FileUpload from "@/lib/ui/form-elements/file-upload/file-upload";

export default function DayScholarApplication() {
  const router = useRouter();
  const [selectedFiles, setSelectedFiles] = useState([]);
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
          initials: "",
          nickName: "",
          otherNames: "",
          Gender: "",
          race: "",
          accession_no: "",
          dob: "",
          Position_in_family: "",
          Country_of_residence: "",
          Citizenship: "",
          Province: "",
          address: "",
          City: "",
          postal_code: "",
          Home_tell: "",
          Emergency_tell: "",
          learnerCell: "",
          learnerEmail: "",
          home_language: "",
          preferred_language_of_instruction: "",
          boarder: "",
          deceased: "",
          mode_of_transport: "",
          religion: "",
          preprimaryeduacation: "",
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
    MedicalInformation: {
      information: {
        medicalAidNumber: "",
        medicalAidName: "",
        medicalAidMainMember: "",
        doctorName: "",
        doctorAddress: "",
        doctorNumber: "",
        medicalCondition: "",
        sprc: "",
        DexterityOfLearner: "",
        socialGrant: "",
      },
    },
    // ... other sections
  });

  // Function to save data to S3
  const saveToS3 = async (data, id, files) => {
    try {
      // Configure AWS SDK with your credentials and region
      AWS.config.update({
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
        region: process.env.AWS_REGION,
      });

      // Create S3 instance
      const s3 = new AWS.S3();

      // Prepare params for putObject method for saving form data
      const formDataParams = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `forms/day-scholar/${id}/${id}.json`,
        Body: JSON.stringify(data),
        ContentType: "application/json",
        ACL: "public-read",
      };

      // Upload form data to S3
      await s3.putObject(formDataParams).promise();

      console.log("Form data saved to S3 successfully.");

      // Iterate over each file and save it to S3
      for (const file of files) {
        const fileParams = {
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: `forms/day-scholar/${id}/${file.name}`, // Use ID as part of the folder name
          Body: file,
          ACL: "public-read",
        };

        await s3.putObject(fileParams).promise();
        console.log(file);
      }
    } catch (error) {
      console.error("Error saving data to S3:", error);
    }
  };

  // Function to generate the link
  const generateLink = (id) => {
    return `${process.env.NEXT_PUBLIC_BASE_URL}/forms/day-scholar/${id}`;
  };

  const generateLinkAndSave = async () => {
    const parentDetailsMotherInfo = formData.ParentDetailsMother?.Information;
    const emailFromForm = parentDetailsMotherInfo?.Email;

    const id = parentDetailsMotherInfo?.IDNumber || "defaultId";
    const link = generateLink(id);

    // Save to S3
    const dataToSave = { ...formData, generatedLink: link };
    await saveToS3(dataToSave, id, selectedFiles); // Pass the selected files here

    try {
      // Send email to API endpoint
      await axios.post("/api/send-email", {
        name: parentDetailsMotherInfo?.firstName,
        email: emailFromForm,
        message: `Here is the link to the submitted form: ${link}`,
        nature: "Submitted Form Link",
      });

      // Log the generated link and data
      console.log("Generated link:", link);
    } catch (error) {
      console.error("Error sending email:", error);
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
        if (updatedLearnerInformation[index]) {
          // Check if learner exists
          updatedLearnerInformation[index] = {
            ...updatedLearnerInformation[index],
            Information: {
              ...(updatedLearnerInformation[index].Information || {}),
              [field]: value,
            },
          };
        }

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
            ...(prevFormData[parent][category] || {}),
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
              initials: "",
              nickName: "",
              otherNames: "",
              Gender: "",
              race: "",
              accession_no: "",
              dob: "",
              Position_in_family: "",
              Country_of_residence: "",
              Citizenship: "",
              Province: "",
              address: "",
              City: "",
              postal_code: "",
              Home_tell: "",
              Emergency_tell: "",
              learnerCell: "",
              learnerEmail: "",
              home_language: "",
              preferred_language_of_instruction: "",
              boarder: "",
              deceased: "",
              mode_of_transport: "",
              religion: "",
              preprimaryeduacation: "",
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

            {formData.ParentDetailsMother.Information &&
              (formData.ParentDetailsMother.Information.Status === "Parent" ||
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
              ) : null)}
          </div>
          <div className="">
            <LearnerInformation
              data={formData.LearnerInformation}
              onDataChange={(index, field, value) =>
                handleFormChange(
                  "LearnerInformation",
                  "Information",
                  field,
                  value,
                  index
                )
              }
              onAddLearner={addLearner}
              onRemoveLearner={removeLearner}
            />
          </div>
          <div className="padding-top_xxx-large">
            <h1 className="color-maroon padding-top_large padding-bottom_large medium-padding-left_large ">
              Medical Information
            </h1>
            <MedicalInformation
              data={formData.MedicalInformation}
              onDataChange={(field, value) =>
                handleFormChange(
                  "MedicalInformation",
                  "information",
                  field,
                  value
                )
              }
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
      <div className="section">
        <FileUpload
          label="Upload your files."
          onFilesChange={(files) => setSelectedFiles(files)}
        />
      </div>
      <Button label="Submit" variant="submit" onClick={generateLinkAndSave} />
    </>
  );
}
