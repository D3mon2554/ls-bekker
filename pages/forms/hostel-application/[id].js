import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ParentDetailsMother from "@/lib/ui/day-scholar-form-components/parentDetailsMother/parentdetailsmother";
import ParentDetailsFather from "@/lib/ui/day-scholar-form-components/parentDetailsFather/parentdetailsfather";
import AddressInformation from "@/lib/ui/day-scholar-form-components/address/address";
import LearnerInformation from "@/lib/ui/day-scholar-form-components/learnerInformation/learnerinformation";
import ContactPresentSchool from "@/lib/ui/day-scholar-form-components/learnerInformation/contactpresentschool";
import MedicalInformation from "@/lib/ui/day-scholar-form-components/medical_information/medical_information";
import Acknowledgement from "@/lib/ui/day-scholar-form-components/acknoledgement/acknowledgement";
import HostelQuestions from "@/lib/ui/day-scholar-form-components/hostel-questions/hostel-questions";
import { OurSchoolImage } from "@/lib/ui/images/images";
import AWS from "aws-sdk";
import Button from "@/lib/ui/button/button";

const FormDisplay = () => {
  const router = useRouter();
  const { id } = router.query;
  const [formData, setFormData] = useState(null);
  const [fileUrls, setFileUrls] = useState([]);

  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const response = await fetch(
          `https://lsbekker.s3.eu-north-1.amazonaws.com/forms/hostel-application/${id}/${id}.json`
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

  const handleDownloadPDF = async () => {
    if (typeof window !== "undefined") {
      const html2pdf = require("html2pdf.js");
      const element = document.getElementById("pdf-content");
      if (!element) {
        console.error("PDF content element not found");
        return;
      }

      const pdfConfig = {
        filename: `${id}.pdf`,
        jsPDF: {
          unit: "in",
          format: "a4",
          orientation: "portrait",
          text: true,
        },
        options: {
          allowTaint: true,
          useCORS: true,
          windowWidth: element.offsetWidth,
        },
      };

      // Use html2pdf.js to generate and save the PDF
      html2pdf().set(pdfConfig).from(element).save();
    } else {
      console.error("html2pdf.js can only be used in the browser environment");
    }
  };
  console.log(formData);
  return (
    <>
      {/* Banner */}
      <div className="section prefect">
        <div className="cutout-section">
          <div className="section-content grid grid-align_vertical-center">
            <OurSchoolImage color="#FFFFFF" width={550} height={200} />
            <div>
              <h1 className="font-size_xx-large">
                APPLICATION FOR ADMISSION TO SCHOOL
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div id="pdf-content" className="section">
        <div className="section-content grid grid-wrap grid-align_vertical-center">
          {/* Parent Details Mother */}
          <div className="size_1-of-1">
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
          <div>
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
          {/* LearnerInformation */}
          <div className="size_1-of-1 pdf-section">
            <LearnerInformation
              data={formData.LearnerInformation}
              disabled={isFieldDisabled}
            />
          </div>
          {/* MedicalInformation */}
          <div className="size_1-of-1 pdf-section">
            <h1 className="color-maroon padding-top_xx-large">
              Medical Information
            </h1>
            <MedicalInformation
              data={formData.MedicalInformation.information}
              disabled={isFieldDisabled}
            />
          </div>
          <div className="">
            <div className="size_1-of-1 padding-bottom_xx-large pdf-section">
              <h1 className="color-maroon padding-top_large padding-bottom_large medium-padding-left_large ">
                Additional Information
              </h1>
              <HostelQuestions
                data={formData.HostelQuestions.information}
                disabled={isFieldDisabled}
              />
            </div>
          </div>
          {/* ContactPresentSchool */}
          <div className="size_1-of-1">
            <ContactPresentSchool
              data={formData.ContactPresentSchool.Information}
              disabled={isFieldDisabled}
            />
          </div>
          {/* Files */}
          <div className="padding-bottom_xxx-large">
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
          <div className="size_1-of-1">
            <Acknowledgement
              data={formData.Acknowledgement.information}
              disabled={isFieldDisabled}
            />
          </div>
        </div>
      </div>
      <div className="padding-bottom_xxx-large medium-padding-left_xxx-large">
        <Button
          label="Download PDF"
          variant="submit"
          onClick={handleDownloadPDF}
        />
      </div>
    </>
  );
};

export default FormDisplay;
