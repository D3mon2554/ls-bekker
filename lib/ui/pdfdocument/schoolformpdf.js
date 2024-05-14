import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import ParentDetailsMother from "@/lib/ui/day-scholar-form-components/parentDetailsMother/parentdetailsmother";
import ParentDetailsFather from "@/lib/ui/day-scholar-form-components/parentDetailsFather/parentdetailsfather";
import AddressInformation from "@/lib/ui/day-scholar-form-components/address/address";
import LearnerInformation from "@/lib/ui/day-scholar-form-components/learnerInformation/learnerinformation";
import ContactPresentSchool from "@/lib/ui/day-scholar-form-components/learnerInformation/contactpresentschool";
import MedicalInformation from "@/lib/ui/day-scholar-form-components/medical_information/medical_information";
import Acknowledgement from "@/lib/ui/day-scholar-form-components/acknoledgement/acknowledgement";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
    color: "maroon",
  },
  value: {
    fontSize: 12,
    marginBottom: 5,
  },
});

const PDFDocument = ({ formData }) => {
  if (!formData) {
    return null;
  }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          {/* Parent Details Mother */}
          <View>
            <Text style={styles.label}>
              Parent/Legal Guardian/Proxy Information
            </Text>
            <ParentDetailsMother
              data={formData?.ParentDetailsMother?.Information}
              disabled={true} // Adjust as needed
            />
            <AddressInformation
              data={formData?.ParentDetailsMother?.AddressInformation}
              disabled={true} // Adjust as needed
            />
          </View>

          {/* Parent Details Father */}
          {formData?.ParentDetailsMother?.Information &&
            (formData.ParentDetailsMother.Information.Status === "Parent" ||
              formData.ParentDetailsMother.Information.IfNotParent ===
                "Yes") && (
              <View>
                <Text style={styles.label}>Parent Details</Text>
                <ParentDetailsFather
                  data={formData?.ParentDetailsFather?.information}
                  disabled={true} // Adjust as needed
                />
                <AddressInformation
                  data={formData?.ParentDetailsFather?.AddressInformation}
                  disabled={true} // Adjust as needed
                />
              </View>
            )}

          {/* Learner Information */}
          <View>
            <Text style={styles.label}>Learner Information</Text>
            <LearnerInformation
              data={formData?.LearnerInformation}
              disabled={true} // Adjust as needed
            />
          </View>

          {/* Medical Information */}
          <View>
            <Text style={styles.label}>Medical Information</Text>
            <MedicalInformation
              data={formData?.MedicalInformation?.information}
              disabled={true} // Adjust as needed
            />
          </View>

          {/* Contact Present School */}
          <View>
            <Text style={styles.label}>Contact Present School</Text>
            <ContactPresentSchool
              data={formData?.ContactPresentSchool?.Information}
              disabled={true} // Adjust as needed
            />
          </View>

          {/* Acknowledgement */}
          <View>
            <Text style={styles.label}>Acknowledgement</Text>
            <Acknowledgement
              data={formData?.Acknowledgement?.information}
              disabled={true} // Adjust as needed
            />
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDFDocument;
