import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  mainSection: {
    padding: 5,
  },
  title: {
    fontSize: 20,
    marginBottom: 5,
    color: "#6a0911",
  },
  sectionContainer: {
    flexDirection: "row", // Arrange items horizontally
    flexWrap: "wrap", // Wrap items to the next row when needed
    marginBottom: 5,
  },
  textElementContainer: {
    width: "33%", // Each container takes 30% of the page width
    marginBottom: 5,
    padding: 5,
  },
  textElement: {
    border: "1px solid #bbbbbb",
    borderRadius: 5,
    color: "#7e7f7f",
    minHeight: 40,
    padding: "5px",
    fontSize: 13,
    width: "100%", // Text element takes full width of its container
  },
  textContainerTitle: {
    fontSize: 10,
    color: "#7e7f7f",
    paddingBottom: 5,
  },
  learner: {
    paddingLeft: "155px",
  },
  trueBackground: {
    backgroundColor: "#ffc82d",
    borderRadius: "10px",
    border: "1px solid #bbbbbb",
  },
  falseBackground: {
    backgroundColor: "#fff",
  },
  Checkbox: {
    width: "20px",
    height: "20px",
  },
});

const HostelPDFDocument = ({ formData, Files }) => {
  if (!formData) {
    return null;
  }

  const herebyValue = formData.Acknowledgement.information.hereby;

  return (
    <Document>
      {/* Learner Information */}
      {formData.LearnerInformation &&
        formData.LearnerInformation.length > 0 && (
          <Page size="A4">
            {formData.LearnerInformation.map((learner, index) => (
              <View key={index} style={styles.mainSection}>
                <Text style={styles.title}>
                  {learner.Information.firstName} {learner.Information.lastName}{" "}
                  Learner Information
                </Text>

                <View style={styles.sectionContainer}>
                  <View style={styles.textElementContainer}>
                    <Text style={styles.textContainerTitle}>
                      Grade applied for:
                    </Text>
                    <Text style={styles.textElement}>
                      {learner.Information.PresentGrade}
                    </Text>
                  </View>
                  <View style={styles.textElementContainer}>
                    <Text style={styles.textContainerTitle}>
                      Year applied for:
                    </Text>
                    <Text style={styles.textElement}>
                      {learner.Information.PresentYear}
                    </Text>
                  </View>
                  <View style={styles.textElementContainer}>
                    <Text style={styles.textContainerTitle}>
                      Highest Grade Passed
                    </Text>
                    <Text style={styles.textElement}>
                      {learner.Information.YearsIngGrade}
                    </Text>
                  </View>
                  <View style={styles.textElementContainer}>
                    <Text style={styles.textContainerTitle}>
                      Year when grade was passed
                    </Text>
                    <Text style={styles.textElement}>
                      {learner.Information.PresentSchool}
                    </Text>
                  </View>
                  <View style={styles.textElementContainer}>
                    <Text style={styles.textContainerTitle}>Accession No</Text>
                    <Text style={styles.textElement}>
                      {learner.Information.accession_no}
                    </Text>
                  </View>
                  <View style={styles.textElementContainer}>
                    <Text style={styles.textContainerTitle}>First Name</Text>
                    <Text style={styles.textElement}>
                      {learner.Information.firstName}
                    </Text>
                  </View>
                  <View style={styles.textElementContainer}>
                    <Text style={styles.textContainerTitle}>Last Name</Text>
                    <Text style={styles.textElement}>
                      {learner.Information.lastName}
                    </Text>
                  </View>
                  <View style={styles.textElementContainer}>
                    <Text style={styles.textContainerTitle}>Initials</Text>
                    <Text style={styles.textElement}>
                      {learner.Information.initials}
                    </Text>
                  </View>
                  <View style={styles.textElementContainer}>
                    <Text style={styles.textContainerTitle}>Nick Name</Text>
                    <Text style={styles.textElement}>
                      {learner.Information.nickName}
                    </Text>
                  </View>
                  <View style={styles.textElementContainer}>
                    <Text style={styles.textContainerTitle}>Other Names</Text>
                    <Text style={styles.textElement}>
                      {learner.Information.otherNames}
                    </Text>
                  </View>
                  <View style={styles.textElementContainer}>
                    <Text style={styles.textContainerTitle}>Date Of Birth</Text>
                    <Text style={styles.textElement}>
                      {learner.Information.dob}
                    </Text>
                  </View>
                  <View style={styles.textElementContainer}>
                    <Text style={styles.textContainerTitle}>Gender</Text>
                    <Text style={styles.textElement}>
                      {learner.Information.Gender}
                    </Text>
                  </View>
                  <View style={styles.textElementContainer}>
                    <Text style={styles.textContainerTitle}>Race</Text>
                    <Text style={styles.textElement}>
                      {learner.Information.race}
                    </Text>
                  </View>
                  <View style={styles.textElementContainer}>
                    <Text style={styles.textContainerTitle}>
                      Identification Number
                    </Text>
                    <Text style={styles.textElement}>
                      {learner.Information.IDNumber}
                    </Text>
                  </View>
                  <View style={styles.textElementContainer}>
                    <Text style={styles.textContainerTitle}>
                      Country of Residence
                    </Text>
                    <Text style={styles.textElement}>
                      {learner.Information.Country_of_residence}
                    </Text>
                  </View>
                  <View style={styles.textElementContainer}>
                    <Text style={styles.textContainerTitle}>Citizenship</Text>
                    <Text style={styles.textElement}>
                      {learner.Information.Citizenship}
                    </Text>
                  </View>
                  <View style={styles.textElementContainer}>
                    <Text style={styles.textContainerTitle}>
                      If SA, indicate province of residence
                    </Text>
                    <Text style={styles.textElement}>
                      {learner.Information.Province}
                    </Text>
                  </View>
                  <View style={styles.textElementContainer}>
                    <Text style={styles.textContainerTitle}>
                      Physical Address
                    </Text>
                    <Text style={styles.textElement}>
                      {learner.Information.address}
                    </Text>
                  </View>
                  <View style={styles.textElementContainer}>
                    <Text style={styles.textContainerTitle}>City/Suburb</Text>
                    <Text style={styles.textElement}>
                      {learner.Information.City}
                    </Text>
                  </View>
                  <View style={styles.textElementContainer}>
                    <Text style={styles.textContainerTitle}>Code</Text>
                    <Text style={styles.textElement}>
                      {learner.Information.postal_code}
                    </Text>
                  </View>
                  <View style={styles.textElementContainer}>
                    <Text style={styles.textContainerTitle}>
                      Home Telephone
                    </Text>
                    <Text style={styles.textElement}>
                      {learner.Information.Home_tell}
                    </Text>
                  </View>
                  <View style={styles.textElementContainer}>
                    <Text style={styles.textContainerTitle}>
                      Emergency Telephone
                    </Text>
                    <Text style={styles.textElement}>
                      {learner.Information.Emergency_tell}
                    </Text>
                  </View>
                  <View style={styles.textElementContainer}>
                    <Text style={styles.textContainerTitle}>Learner Cell</Text>
                    <Text style={styles.textElement}>
                      {learner.Information.learnerCell}
                    </Text>
                  </View>
                  <View style={styles.textElementContainer}>
                    <Text style={styles.textContainerTitle}>
                      Learner Email Address
                    </Text>
                    <Text style={styles.textElement}>
                      {learner.Information.learnerEmail}
                    </Text>
                  </View>
                  <View style={styles.textElementContainer}>
                    <Text style={styles.textContainerTitle}>Home Language</Text>
                    <Text style={styles.textElement}>
                      {learner.Information.home_language}
                    </Text>
                  </View>
                  <View style={styles.textElementContainer}>
                    <Text style={styles.textContainerTitle}>
                      Preferred Language of Instruction
                    </Text>
                    <Text style={styles.textElement}>
                      {learner.Information.preferred_language_of_instruction}
                    </Text>
                  </View>
                  <View style={styles.textElementContainer}>
                    <Text style={styles.textContainerTitle}>Boarder</Text>
                    <Text style={styles.textElement}>
                      {learner.Information.boarder}
                    </Text>
                  </View>
                  <View style={styles.textElementContainer}>
                    <Text style={styles.textContainerTitle}>
                      Deceased Parent
                    </Text>
                    <Text style={styles.textElement}>
                      {learner.Information.deceased}
                    </Text>
                  </View>
                  <View style={styles.textElementContainer}>
                    <Text style={styles.textContainerTitle}>
                      Mode of transport
                    </Text>
                    <Text style={styles.textElement}>
                      {learner.Information.mode_of_transport}
                    </Text>
                  </View>
                  <View style={styles.textElementContainer}>
                    <Text style={styles.textContainerTitle}>Religion</Text>
                    <Text style={styles.textElement}>
                      {learner.Information.religion}
                    </Text>
                  </View>
                  <View style={styles.textElementContainer}>
                    <Text style={styles.textContainerTitle}>
                      Dexterity of learner
                    </Text>
                    <Text style={styles.textElement}>
                      {learner.Information.DexterityOfLearner}
                    </Text>
                  </View>
                  <View style={styles.textElementContainer}>
                    <Text style={styles.textContainerTitle}>
                      For Grade 1 only
                    </Text>
                    <Text style={styles.textElement}>
                      {learner.Information.preprimaryeduacation}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </Page>
        )}
      {/* Additional Information + Medical Information */}
      <Page size="A4">
        <View style={styles.mainSection}>
          <Text style={styles.title}>Additional Information</Text>
          <View style={styles.sectionContainer}>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>First Name</Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.Information.firstName}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Last Name</Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.Information.lastName}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>RSA-Citizen</Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.Information.RSACitizen}
              </Text>
            </View>

            {formData.ParentDetailsMother.Information.RSACitizen === "No" && (
              <>
                <View style={styles.textElementContainer}>
                  <Text style={styles.textContainerTitle}>
                    If you are not an RSA Citizen, state reason
                  </Text>
                  <Text style={styles.textElement}>
                    {formData.ParentDetailsMother.Information.IfNo}
                  </Text>
                </View>
              </>
            )}
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>ID Number</Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.Information.IDNumber}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Home Tel.</Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.Information.HomeTel}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Work Tel.</Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.Information.WorkTel}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Cell No.</Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.Information.CellNo}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Email</Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.Information.Email.replace(
                  /(.{24})/g,
                  "$1\n"
                )}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Occupation</Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.Information.Occupation}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Employer</Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.Information.Employer}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Material Status</Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.Information.MaterialStatus}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>
                State whether parent/legal guardian/proxy.
              </Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.Information.Status}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              {formData.ParentDetailsMother.Information.Status === "Proxy" && (
                <>
                  <Text style={styles.textContainerTitle}>
                    {" "}
                    If the applicant is not the parent or legal guardian but the
                    proxy:
                  </Text>
                  <Text style={styles.textElement}>
                    {formData.ParentDetailsMother.Information.IfNotParent}
                  </Text>
                </>
              )}
            </View>
          </View>
        </View>
        <View style={styles.mainSection}>
          <Text style={styles.title}>Contact details of present school</Text>
          <View style={styles.sectionContainer}>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>
                Name of previous school
              </Text>
              <Text style={styles.textElement}>
                {
                  formData.ContactPresentSchool.Information
                    .name_of_previous_school
                }
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>
                Previous school address
              </Text>
              <Text style={styles.textElement}>
                {
                  formData.ContactPresentSchool.Information
                    .previous_school_address
                }
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Province</Text>
              <Text style={styles.textElement}>
                {formData.ContactPresentSchool.Information.province}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Country</Text>
              <Text style={styles.textElement}>
                {formData.ContactPresentSchool.Information.country}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Postal Code</Text>
              <Text style={styles.textElement}>
                {formData.ContactPresentSchool.Information.code}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>
                Contact Person Details
              </Text>
              <Text style={styles.textElement}>
                {formData.ContactPresentSchool.Information.cpd}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.mainSection}>
          <Text style={styles.title}>Medical Information</Text>
          <View style={styles.sectionContainer}>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Medical Aid Number </Text>
              <Text style={styles.textElement}>
                {formData.MedicalInformation.information.medicalAidNumber}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Medical Aid Name</Text>
              <Text style={styles.textElement}>
                {formData.MedicalInformation.information.medicalAidName}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>
                Medical Aid Main Membern
              </Text>
              <Text style={styles.textElement}>
                {formData.MedicalInformation.information.medicalAidMainMember}
              </Text>
            </View>

            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Doctor Name</Text>
              <Text style={styles.textElement}>
                {formData.MedicalInformation.information.doctorName}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Doctor Address</Text>
              <Text style={styles.textElement}>
                {formData.MedicalInformation.information.doctorAddress}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Doctor Number</Text>
              <Text style={styles.textElement}>
                {formData.MedicalInformation.information.doctorNumber}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Medical Condition</Text>
              <Text style={styles.textElement}>
                {formData.MedicalInformation.information.medicalCondition}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>
                Special Problems Requiring Counseling
              </Text>
              <Text style={styles.textElement}>
                {formData.MedicalInformation.information.sprc}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Reg. Social Grant</Text>
              <Text style={styles.textElement}>
                {formData.MedicalInformation.information.socialGrant}
              </Text>
            </View>
          </View>
        </View>
      </Page>
      {/* Parent Details Mother */}
      <Page size="A4">
        <View style={styles.mainSection}>
          <Text style={styles.title}>
            Parent/Legal Guardian/Proxy Information
          </Text>
          <View style={styles.sectionContainer}>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>First Name</Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.Information.firstName}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Last Name</Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.Information.lastName}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>RSA-Citizen</Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.Information.RSACitizen}
              </Text>
            </View>

            {formData.ParentDetailsMother.Information.RSACitizen === "No" && (
              <>
                <View style={styles.textElementContainer}>
                  <Text style={styles.textContainerTitle}>
                    If you are not an RSA Citizen, state reason
                  </Text>
                  <Text style={styles.textElement}>
                    {formData.ParentDetailsMother.Information.IfNo}
                  </Text>
                </View>
              </>
            )}
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>ID Number</Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.Information.IDNumber}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Home Tel.</Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.Information.HomeTel}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Work Tel.</Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.Information.WorkTel}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Cell No.</Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.Information.CellNo}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Email</Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.Information.Email.replace(
                  /(.{24})/g,
                  "$1\n"
                )}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Occupation</Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.Information.Occupation}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Employer</Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.Information.Employer}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Material Status</Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.Information.MaterialStatus}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>
                State whether parent/legal guardian/proxy.
              </Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.Information.Status}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              {formData.ParentDetailsMother.Information.Status === "Proxy" && (
                <>
                  <Text style={styles.textContainerTitle}>
                    {" "}
                    If the applicant is not the parent or legal guardian but the
                    proxy:
                  </Text>
                  <Text style={styles.textElement}>
                    {formData.ParentDetailsMother.Information.IfNotParent}
                  </Text>
                </>
              )}
            </View>
          </View>
        </View>
        {/* Home Address */}
        <View style={styles.mainSection}>
          <Text style={styles.title}>Home Address</Text>
          <View style={styles.sectionContainer}>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Address</Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.AddressInformation.homeAddress}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>
                Apartment,Suite,etc.
              </Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.AddressInformation.HomeApartment}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>City</Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.AddressInformation.HomeCity}
              </Text>
            </View>

            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Province</Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.AddressInformation.HomeProvince}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Country</Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.AddressInformation.HomeCountry}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Postal Code</Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.AddressInformation.HomePostal}
              </Text>
            </View>
          </View>
        </View>
        {/* Work Address */}
        <View style={styles.mainSection}>
          <Text style={styles.title}>Work Address</Text>
          <View style={styles.sectionContainer}>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Address</Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.AddressInformation.WorkAddress}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>
                Apartment,Suite,etc.
              </Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.AddressInformation.WorkApartment}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>City</Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.AddressInformation.WorkCity}
              </Text>
            </View>

            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Province</Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.AddressInformation.WorkProvince}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Country</Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.AddressInformation.WorkCountry}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Postal Code</Text>
              <Text style={styles.textElement}>
                {formData.ParentDetailsMother.AddressInformation.WorkPostal}
              </Text>
            </View>
          </View>
        </View>
      </Page>
      {/* Parent Details Father */}
      {formData.ParentDetailsMother.Information &&
        ((formData.ParentDetailsMother.Information.Status === "Parent" &&
          formData.ParentDetailsMother.Information.MaterialStatus ===
            "Married") ||
        formData.ParentDetailsMother.Information.IfNotParent === "Yes" ||
        (formData.ParentDetailsMother.Information.Status === "Parent" &&
          formData.ParentDetailsMother.Information.MaterialStatus ===
            "Divorced") ? (
          <Page size="A4">
            <View style={styles.mainSection}>
              <Text style={styles.title}>Second Parent</Text>
              <View style={styles.sectionContainer}>
                <View style={styles.textElementContainer}>
                  <Text style={styles.textContainerTitle}>First Name</Text>
                  <Text style={styles.textElement}>
                    {formData.ParentDetailsFather.information.firstName}
                  </Text>
                </View>
                <View style={styles.textElementContainer}>
                  <Text style={styles.textContainerTitle}>Last Name</Text>
                  <Text style={styles.textElement}>
                    {formData.ParentDetailsFather.information.lastName}
                  </Text>
                </View>
                <View style={styles.textElementContainer}>
                  <Text style={styles.textContainerTitle}>RSA-Citizen</Text>
                  <Text style={styles.textElement}>
                    {formData.ParentDetailsFather.information.RSACitizen}
                  </Text>
                </View>

                {formData.ParentDetailsFather.information.RSACitizen ===
                  "No" && (
                  <>
                    <View style={styles.textElementContainer}>
                      <Text style={styles.textContainerTitle}>
                        If you are not an RSA Citizen, state reason
                      </Text>
                      <Text style={styles.textElement}>
                        {formData.ParentDetailsFather.information.IfNo}
                      </Text>
                    </View>
                  </>
                )}
                <View style={styles.textElementContainer}>
                  <Text style={styles.textContainerTitle}>ID Number</Text>
                  <Text style={styles.textElement}>
                    {formData.ParentDetailsFather.information.IDNumber}
                  </Text>
                </View>
                <View style={styles.textElementContainer}>
                  <Text style={styles.textContainerTitle}>Home Tel.</Text>
                  <Text style={styles.textElement}>
                    {formData.ParentDetailsFather.information.HomeTel}
                  </Text>
                </View>
                <View style={styles.textElementContainer}>
                  <Text style={styles.textContainerTitle}>Work Tel.</Text>
                  <Text style={styles.textElement}>
                    {formData.ParentDetailsFather.information.WorkTel}
                  </Text>
                </View>
                <View style={styles.textElementContainer}>
                  <Text style={styles.textContainerTitle}>Cell No.</Text>
                  <Text style={styles.textElement}>
                    {formData.ParentDetailsFather.information.CellNo}
                  </Text>
                </View>
                <View style={styles.textElementContainer}>
                  <Text style={styles.textContainerTitle}>Email</Text>
                  <Text style={styles.textElement}>
                    {formData.ParentDetailsFather.information.Email
                      ? formData.ParentDetailsFather.information.Email.replace(
                          /(.{24})/g,
                          "$1\n"
                        )
                      : ""}
                  </Text>
                </View>
                <View style={styles.textElementContainer}>
                  <Text style={styles.textContainerTitle}>Occupation</Text>
                  <Text style={styles.textElement}>
                    {formData.ParentDetailsFather.information.Occupation}
                  </Text>
                </View>
                <View style={styles.textElementContainer}>
                  <Text style={styles.textContainerTitle}>Employer</Text>
                  <Text style={styles.textElement}>
                    {formData.ParentDetailsFather.information.Employer}
                  </Text>
                </View>
                <View style={styles.textElementContainer}>
                  <Text style={styles.textContainerTitle}>Material Status</Text>
                  <Text style={styles.textElement}>
                    {formData.ParentDetailsFather.information.MaterialStatus}
                  </Text>
                </View>
              </View>
            </View>
            {/* Home Address */}
            <View style={styles.mainSection}>
              <Text style={styles.title}>Home Address</Text>
              <View style={styles.sectionContainer}>
                <View style={styles.textElementContainer}>
                  <Text style={styles.textContainerTitle}>Address</Text>
                  <Text style={styles.textElement}>
                    {
                      formData.ParentDetailsFather.AddressInformation
                        .homeAddress
                    }
                  </Text>
                </View>
                <View style={styles.textElementContainer}>
                  <Text style={styles.textContainerTitle}>
                    Apartment,Suite,etc.
                  </Text>
                  <Text style={styles.textElement}>
                    {
                      formData.ParentDetailsFather.AddressInformation
                        .HomeApartment
                    }
                  </Text>
                </View>
                <View style={styles.textElementContainer}>
                  <Text style={styles.textContainerTitle}>City</Text>
                  <Text style={styles.textElement}>
                    {formData.ParentDetailsFather.AddressInformation.HomeCity}
                  </Text>
                </View>

                <View style={styles.textElementContainer}>
                  <Text style={styles.textContainerTitle}>Province</Text>
                  <Text style={styles.textElement}>
                    {
                      formData.ParentDetailsFather.AddressInformation
                        .HomeProvince
                    }
                  </Text>
                </View>
                <View style={styles.textElementContainer}>
                  <Text style={styles.textContainerTitle}>Country</Text>
                  <Text style={styles.textElement}>
                    {
                      formData.ParentDetailsFather.AddressInformation
                        .HomeCountry
                    }
                  </Text>
                </View>
                <View style={styles.textElementContainer}>
                  <Text style={styles.textContainerTitle}>Postal Code</Text>
                  <Text style={styles.textElement}>
                    {formData.ParentDetailsFather.AddressInformation.HomePostal}
                  </Text>
                </View>
              </View>
            </View>
            {/* Work Address */}
            <View style={styles.mainSection}>
              <Text style={styles.title}>Work Address</Text>
              <View style={styles.sectionContainer}>
                <View style={styles.textElementContainer}>
                  <Text style={styles.textContainerTitle}>Address</Text>
                  <Text style={styles.textElement}>
                    {
                      formData.ParentDetailsFather.AddressInformation
                        .WorkAddress
                    }
                  </Text>
                </View>
                <View style={styles.textElementContainer}>
                  <Text style={styles.textContainerTitle}>
                    Apartment,Suite,etc.
                  </Text>
                  <Text style={styles.textElement}>
                    {
                      formData.ParentDetailsFather.AddressInformation
                        .WorkApartment
                    }
                  </Text>
                </View>
                <View style={styles.textElementContainer}>
                  <Text style={styles.textContainerTitle}>City</Text>
                  <Text style={styles.textElement}>
                    {formData.ParentDetailsFather.AddressInformation.WorkCity}
                  </Text>
                </View>

                <View style={styles.textElementContainer}>
                  <Text style={styles.textContainerTitle}>Province</Text>
                  <Text style={styles.textElement}>
                    {
                      formData.ParentDetailsFather.AddressInformation
                        .WorkProvince
                    }
                  </Text>
                </View>
                <View style={styles.textElementContainer}>
                  <Text style={styles.textContainerTitle}>Country</Text>
                  <Text style={styles.textElement}>
                    {
                      formData.ParentDetailsFather.AddressInformation
                        .WorkCountry
                    }
                  </Text>
                </View>
                <View style={styles.textElementContainer}>
                  <Text style={styles.textContainerTitle}>Postal Code</Text>
                  <Text style={styles.textElement}>
                    {formData.ParentDetailsFather.AddressInformation.WorkPostal}
                  </Text>
                </View>
              </View>
            </View>
          </Page>
        ) : null)}
      {/* Files + Acknowledgement  */}
      <Page size="A4">
        <View style={styles.mainSection}>
          <Text style={styles.title}>Uploaded Files</Text>
          <View style={styles.sectionContainer}>
            {Files.map((files, index) => (
              <View key="index" style={styles.textElementContainer}>
                <Text style={styles.textElement} href={files}>
                  <Text>{files.split("/").pop()}</Text>
                </Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.mainSection}>
          <Text style={styles.title}>Acknowledgement</Text>
          <View style={styles.sectionContainer}>
            <View style={styles.textElementContainer}>
              <Text
                style={[
                  styles.Checkbox,
                  herebyValue ? styles.trueBackground : styles.falseBackground,
                ]}
              ></Text>
              <Text style={styles.textContainerTitle}>
                I hereby declare that to the best of my knowledge, the above
                information as supplied is accurate and correct.
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Name</Text>
              <Text style={styles.textElement}>
                {formData.Acknowledgement.information.Name}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Surname</Text>
              <Text style={styles.textElement}>
                {formData.Acknowledgement.information.Surname}
              </Text>
            </View>
            <View style={styles.textElementContainer}>
              <Text style={styles.textContainerTitle}>Date</Text>
              <Text style={styles.textElement}>
                {formData.Acknowledgement.information.date}
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default HostelPDFDocument;
