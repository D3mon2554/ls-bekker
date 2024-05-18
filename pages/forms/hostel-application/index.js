import React, { useState, useEffect } from "react";
import ParentDetailsMother from "@/lib/ui/day-scholar-form-components/parentDetailsMother/parentdetailsmother";
import ParentDetailsFather from "@/lib/ui/day-scholar-form-components/parentDetailsFather/parentdetailsfather";
import AddressInformation from "@/lib/ui/day-scholar-form-components/address/address";
import LearnerInformation from "@/lib/ui/day-scholar-form-components/learnerInformation/learnerinformation";
import ContactPresentSchool from "@/lib/ui/day-scholar-form-components/learnerInformation/contactpresentschool";
import MedicalInformation from "@/lib/ui/day-scholar-form-components/medical_information/medical_information";
import Acknowledgement from "@/lib/ui/day-scholar-form-components/acknoledgement/acknowledgement";
import Button from "@/lib/ui/button/button";
import AWS from "aws-sdk";
import axios from "axios";
import FileUpload from "@/lib/ui/form-elements/file-upload/file-upload";
import PurposeImages from "@/lib/ui/images/images";
import HostelQuestions from "@/lib/ui/day-scholar-form-components/hostel-questions/hostel-questions";

export default function HostelApplication() {
  const [fileNames, setFileNames] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
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
          DexterityOfLearner: "",
        },
      },
    ],
    ContactPresentSchool: {
      Information: {
        name_of_previous_school: "",
        previous_school_address: "",
        province: "",
        country: "",
        code: "",
        cpd: "",
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
    Acknowledgement: {
      information: {
        hereby: false,
        Name: "",
        Surname: "",
        date: "",
      },
    },
    HostelQuestions: {
      information: {
        academicachievements: "",
        extramuralactivities: "",
        object: "",
        reasonforplacingchild: "",
        medicalcontitions: "",
        bedwetting: "",
        medicine: "",
        allergicmedicine: "",
        allergicfood: "",
      },
    },
  });

  const handleFilesChange = (files) => {
    setSelectedFiles(files);
    const names = files.map((file) => file.name);
    setFileNames(names);
  };
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
        Key: `forms/hostel-application/${id}/${id}.json`,
        Body: JSON.stringify(data),
        ContentType: "application/json",
        ACL: "public-read",
      };

      // Upload form data to S3
      await s3.putObject(formDataParams).promise();

      // Iterate over each file and save it to S3
      for (const file of files) {
        const fileParams = {
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: `forms/hostel-application/${id}/${file.name}`, // Use ID as part of the folder name
          Body: file,
          ACL: "public-read",
        };

        await s3.putObject(fileParams).promise();
      }
    } catch (error) {
      console.error("Error saving data to S3:", error);
    }
  };

  // Function to generate the link
  const generateLink = (id) => {
    return `${process.env.NEXT_PUBLIC_BASE_URL}/forms/hostel-application/${id}`;
  };

  const generateEmailBody = (formData, link, formType) => {
    const parentDetailsMotherInfo = formData.ParentDetailsMother?.Information;
    const firstName = parentDetailsMotherInfo?.firstName;
    const lastName = parentDetailsMotherInfo?.lastName;
    const emailImageURL =
      "https://lsbekker.s3.eu-north-1.amazonaws.com/Files/hostel_email.PNG";
    const emailFooterUrl =
      "https://lsbekker.s3.eu-north-1.amazonaws.com/Files/dayscholar_email_foot.PNG";
    const subject = "Hostel application Form";

    // Construct the email body with HTML content and inline CSS styles
    const emailBody = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Template</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            color: #333;
            line-height: 1.6;
          }
          .container {
            max-width: 100%;
            margin: 0 auto;
            padding: 20px;
            box-sizing: border-box;
          }
          img {
            max-width: 100%;
            height: auto;
            display: block;
            margin-bottom: 20px;
          }
        </style>
      </head>
      <body>
      <div class="container">
      <img src="${emailImageURL}" alt="email">
        <p>Good Day ${firstName} ${lastName},</p>
        <p>Thank you for your application.</p>
        <p>Here is the link to your Form: <a href="${link}">${link}</a></p>
        <p>Please note that we will contact you within the next 48 hours to arrange an individual open day for you and your child.</p>
        <img src="${emailFooterUrl}" alt="email">
      </div>
      </body>
      </html>
    `;

    return { subject, emailBody };
  };

  const generateLinkAndSave = async () => {
    const isValidForm = validateForm();

    if (!isValidForm) {
      // Form validation failed, do not proceed
      return;
    }
    const parentDetailsMotherInfo = formData.ParentDetailsMother?.Information;
    const emailFromForm = parentDetailsMotherInfo?.Email;
    const id = parentDetailsMotherInfo?.IDNumber || "defaultId";
    const link = generateLink(id);

    // Save to S3
    const dataToSave = {
      ...formData,
      generatedLink: link,
      fileNames: fileNames,
    };

    try {
      // Save data to S3
      await saveToS3(dataToSave, id, selectedFiles);

      // Generate email subject and body using the function
      const { subject, emailBody } = generateEmailBody(
        formData,
        link,
        "Hostel"
      );

      // Send email to API endpoint
      await axios.post("/api/send-email", {
        name: parentDetailsMotherInfo?.firstName,
        email: emailFromForm,
        message: emailBody,
        nature: subject,
        fileNames: fileNames,
      });
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

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
              DexterityOfLearner: "",
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

  const validateForm = () => {
    // Define an array of required fields in the form
    const requiredFields = [
      "Acknowledgement.information.Name",
      "Acknowledgement.information.Surname",
      "Acknowledgement.information.hereby",
      "ParentDetailsMother.Information.firstName",
      "ParentDetailsMother.Information.lastName",
      "ParentDetailsMother.Information.RSACitizen",
      "ParentDetailsMother.Information.IDNumber",
      "ParentDetailsMother.Information.Email",
      "ParentDetailsMother.Information.MaterialStatus",
      "ParentDetailsMother.Information.Status",
      "ParentDetailsMother.AddressInformation.HomePostal",
      "ParentDetailsMother.AddressInformation.HomeCountry",
      "ParentDetailsMother.AddressInformation.HomeProvince",
      "ParentDetailsMother.AddressInformation.HomeCity",
      "ParentDetailsMother.AddressInformation.HomeApartment",
      "ParentDetailsMother.AddressInformation.homeAddress",
    ];

    let isValid = true;

    // Loop through each required field and validate
    requiredFields.forEach((fieldPath) => {
      const [parent, category, field] = fieldPath.split(".");
      const value = formData[parent][category][field];

      // Perform validation (e.g., check if the value is not empty)
      if (!value) {
        // Set error state for the field
        setFormData((prevFormData) => ({
          ...prevFormData,
          [parent]: {
            ...prevFormData[parent],
            [category]: {
              ...prevFormData[parent][category],
              [`${field}_error`]: "This field is required.",
            },
          },
        }));

        isValid = false;
      } else {
        // Clear error message if field is valid
        setFormData((prevFormData) => ({
          ...prevFormData,
          [parent]: {
            ...prevFormData[parent],
            [category]: {
              ...prevFormData[parent][category],
              [`${field}_error`]: "", // Clear error message
            },
          },
        }));
      }
    });

    // Check if files are selected and the amount is not less than 4
    if (selectedFiles.length < 4) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        selectedFiles: "Please upload at least 4 files.",
      }));
      isValid = false;
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        selectedFiles: "", // Clear error message if files are sufficient
      }));
    }

    return isValid;
  };

  return (
    <>
      {/* Banner */}
      <div className=" section form">
        <div className="cutout-sectionLeft">
          <div className="section-content grid grid-align_horizontal-end grid-align_vertical-center">
            <div className="size_1-of-1 large-size_2-of-4 medium-padding-left_xx-large  medium-padding-bottom_xx-large">
              <PurposeImages color="#FFC82D" width={380} height={180} />
              <div className="size_1-of-1 padding-bottom_xx-large ">
                <h1 className="font-size_xx-large font-family_futuraDemi">
                  Apply Now
                </h1>
                <h2 className="font-size_x-large">for Hostel</h2>
              </div>
              <div className="size_1-of-1 padding-bottom_large">
                <p className="padding-top_medium">
                  Experience the future of{" "}
                  <span className="color-primary">education</span> with us!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section-content grid grid-wrap grid-align_vertical-center">
          {/* Learner Information */}
          <div className="size_1-of-1">
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
          {/* Additional Information */}
          <div className="size_1-of-1 padding-bottom_xx-large padding-top_xx-large">
            <h1 className="color-maroon padding-top_large padding-bottom_large medium-padding-left_large ">
              Additional Information
            </h1>
            <HostelQuestions
              data={formData.HostelQuestions}
              onDataChange={(field, value) =>
                handleFormChange("HostelQuestions", "information", field, value)
              }
            />
          </div>
          {/*  Medical Information */}
          <div className="size_1-of-1">
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
          {/* Contact Present School */}
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
          {/*  Parent/Legal Guardian/Proxy Information */}
          <div className="size_1-of-1">
            <h1 className="color-maroon padding-top_xx-large padding-bottom_large medium-padding-left_large ">
              Parent/Legal Guardian/Proxy Information
            </h1>
            <ParentDetailsMother
              data={formData.ParentDetailsMother.Information}
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
          {/* Parent details father */}
          <div className="size_1-of-1">
            {formData.ParentDetailsMother.Information &&
              ((formData.ParentDetailsMother.Information.Status === "Parent" &&
                formData.ParentDetailsMother.Information.MaterialStatus ===
                  "Married") ||
              formData.ParentDetailsMother.Information.IfNotParent === "Yes" ||
              (formData.ParentDetailsMother.Information.Status === "Parent" &&
                formData.ParentDetailsMother.Information.MaterialStatus ===
                  "Divorced") ? (
                <div>
                  <h1 className="color-maroon padding-top_large padding-bottom_large medium-padding-left_large ">
                    Parent Details
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
        </div>
      </div>
      <div className="section">
        <div className="section-content">
          {/*  documents */}
          <div className="size_1-of-1">
            <h1 className="color-maroon padding-bottom_large">
              Please submit the following documents:
            </h1>
            <li>Copy of Immunisation Records.</li>
            <li>Copy of Birth Certificate.</li>
            <li>Progress Report from Previous School.</li>
            <li>Transfer Letter from Previous School</li>
            {formErrors.selectedFiles && (
              <div style={{ color: "red" }}>{formErrors.selectedFiles}</div>
            )}
            <FileUpload label="" onFilesChange={handleFilesChange} />
          </div>
          {/* Acknowledgement */}
          <div className="size_1-of-1">
            <Acknowledgement
              data={formData.Acknowledgement.information}
              onDataChange={(field, value) =>
                handleFormChange("Acknowledgement", "information", field, value)
              }
            />
          </div>
        </div>
      </div>
      <div>
        <div className="section-content padding-around_large padding-top_xx-large padding-bottom_xx-large">
          <Button
            label="Submit"
            variant="submit"
            onClick={generateLinkAndSave}
          />
        </div>
      </div>
    </>
  );
}
