import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AWS from "aws-sdk";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ParentDetailsMother from "@/lib/ui/day-scholar-form-components/parentDetailsMother/parentdetailsmother";
import ParentDetailsFather from "@/lib/ui/day-scholar-form-components/parentDetailsFather/parentdetailsfather";
import AddressInformation from "@/lib/ui/day-scholar-form-components/address/address";
import LearnerInformation from "@/lib/ui/day-scholar-form-components/learnerInformation/learnerinformation";
import ContactPresentSchool from "@/lib/ui/day-scholar-form-components/learnerInformation/contactpresentschool";
import MedicalInformation from "@/lib/ui/day-scholar-form-components/medical_information/medical_information";
import Acknowledgement from "@/lib/ui/day-scholar-form-components/acknoledgement/acknowledgement";
import HostelQuestions from "@/lib/ui/day-scholar-form-components/hostel-questions/hostel-questions";
import HostelPDFDocument from "@/lib/ui/pdfdocument/hostelformpdf";
import { FormImages } from "@/lib/ui/images/images";

const FormDisplay = () => {
  const router = useRouter();
  const { id } = router.query;
  const [formData, setFormData] = useState(null);
  const [fileUrls, setFileUrls] = useState([]);

  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const response = await fetch(
          ``
        );
        if (!response.ok) {
          throw new Error("Failed to fetch form data");
        }
        const data = await response.json();
        setFormData(data);
        fetchFileUrls(); // Call fetchFileUrls after setting formData
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    };

    if (id) {
      fetchFormData();
    }
  }, [id]);

  const fetchFileUrls = async () => {
    try {
      const s3 = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
        region: process.env.AWS_REGION,
      });

      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Prefix: `forms/hostel-application/${id}/`,
      };

      const response = await s3.listObjectsV2(params).promise();

      if (response.Contents) {
        const urls = response.Contents.filter(
          (obj) => obj.Key !== `forms/hostel-application/${id}/${id}.json`
        ).map((obj) => {
          return `https://lsbekker.s3.eu-north-1.amazonaws.com/${obj.Key}`;
        });

        setFileUrls(urls);
      }
    } catch (error) {
      console.error("Error fetching file URLs:", error);
    }
  };

  if (!formData || !fileUrls) {
    return <div>Loading...</div>;
  }

  const isFieldDisabled = true;
  const parentLastName =
    formData.ParentDetailsMother?.Information?.lastName || "";
  const parentFristName =
    formData.ParentDetailsMother?.Information?.firstName || "";
  return (
    <>
      <div className=" section form">
        <div className="cutout-sectionLeft">
          <div className="section-content grid grid-align_horizontal-end grid-align_vertical-center">
            <div className="size_1-of-1 large-size_2-of-4 medium-padding-left_xx-large  medium-padding-bottom_xx-large">
              <FormImages color="#FFC82D" width={380} height={180} />
              <div className="size_1-of-1 padding-bottom_xx-large ">
                <h1 className="font-size_xx-large font-family_futuraDemi">
                  Welcome to your Application Form
                </h1>
                <h2 className="font-size_x-large">
                  {parentFristName} {parentLastName}
                </h2>
              </div>
              <div className="size_1-of-1 padding-bottom_large">
                <p className="padding-top_medium">
                  Embark on a journey to excellence with us. Experience the
                  future of <span className="color-primary">education</span>{" "}
                  today!!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Form Display */}
      <div className="section">
        <div className="section-content grid grid-wrap grid-align_vertical-center">
          {/* LearnerInformation */}
          <div className="size_1-of-1 padding-top_xxx-large">
            <LearnerInformation
              data={formData.LearnerInformation}
              disabled={isFieldDisabled}
            />
          </div>
          {/* Additional Information */}
          <div className="padding-top_xx-large">
            <div className="size_1-of-1 padding-bottom_xx-large">
              <h1 className="color-maroon padding-top_large padding-bottom_large medium-padding-left_large ">
                Additional Information
              </h1>
              <HostelQuestions
                data={formData.HostelQuestions.information}
                disabled={isFieldDisabled}
              />
            </div>
          </div>
          {/* MedicalInformation */}
          <div className="padding-top_xx-large">
            <h1 className="color-maroon padding-top_large padding-bottom_large medium-padding-left_large ">
              Medical Information
            </h1>
            <MedicalInformation
              data={formData.MedicalInformation.information}
              disabled={isFieldDisabled}
            />
          </div>
          {/* ContactPresentSchool */}
          <div className="size_1-of-1 padding-top_xx-large">
            <ContactPresentSchool
              data={formData.ContactPresentSchool.Information}
              disabled={isFieldDisabled}
            />
          </div>
          {/* Parent Details Mother */}
          <div className="size_1-of-1 padding-top_xx-large">
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
          {/* Parent Details Father */}
          <div className="padding-top_xx-large">
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
                    data={formData.ParentDetailsFather.information}
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
          {/* Files */}
          <div className="size_1-of-1">
            <h1 className="color-maroon padding-top_xx-large">Files</h1>
            {fileUrls.map((url, index) => (
              <div className="padding-top_large" key={index}>
                <a
                  style={{ textDecoration: "none", color: "#707070" }}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {url.split("/").pop()} {/* Display file name */}
                </a>
                <br />
              </div>
            ))}
          </div>
          {/* Acknowledgement */}
          <div className="size_1-of-1 padding-top_xx-large">
            <Acknowledgement
              data={formData.Acknowledgement.information}
              disabled={isFieldDisabled}
            />
          </div>
        </div>
      </div>
      {/* Download Button */}
      <div
        className="grid grid-align_vertical-center"
        style={{ height: "200px" }}
      >
        <div className="padding-left_xxx-large">
          <div className="submit">
            <PDFDownloadLink
              document={
                <HostelPDFDocument formData={formData} Files={fileUrls} />
              }
              fileName={id}
              className="button_text"
            >
              {({ blob, url, loading, error }) =>
                loading ? "Loading document..." : "Download PDF"
              }
            </PDFDownloadLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormDisplay;
