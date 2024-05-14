import React from "react";
import Text from "@/lib/ui/form-elements/text/text";
import Number from "@/lib/ui/form-elements/number/number";
import Select from "../../form-elements/select/select";
import TextArea from "../../form-elements/textarea/textarea";

export default function MedicalInformation({ data, onDataChange }) {
  const handleInputChange = (field, value) => {
    onDataChange(field, value);
  };

  return (
    <div className=" grid grid-wrap">
      <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
        <Text
          label="Medical Aid Number"
          value={data.medicalAidNumber}
          onChange={(value) => handleInputChange("medicalAidNumber", value)}
        />
      </div>
      <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
        <Text
          label="Medical Aid Name"
          value={data.medicalAidName}
          onChange={(value) => handleInputChange("medicalAidName", value)}
        />
      </div>
      <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
        <Text
          label="Medical Aid Main Member"
          value={data.medicalAidMainMember}
          onChange={(value) => handleInputChange("medicalAidMainMember", value)}
        />
      </div>
      <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
        <Text
          label="Doctor Name"
          value={data.doctorName}
          onChange={(value) => handleInputChange("doctorName", value)}
        />
      </div>
      <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
        <TextArea
          label="Doctor Address"
          value={data.doctorAddress}
          onChange={(value) => handleInputChange("doctorAddress", value)}
        />
      </div>
      <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
        <Text
          label="Doctor Number"
          value={data.doctorNumber}
          onChange={(value) => handleInputChange("doctorNumber", value)}
        />
      </div>
      <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
        <TextArea
          label="Medical Condition"
          value={data.medicalCondition}
          onChange={(value) => handleInputChange("medicalCondition", value)}
        />
      </div>
      <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
        <TextArea
          label="Special Problems Requiring Counseling"
          value={data.sprc}
          onChange={(value) => handleInputChange("sprc", value)}
        />
      </div>
      <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
        <Select
          label="Reg. Social Grant"
          options={[
            {
              label: "Yes",
              value: "Yes",
            },
            {
              label: "No",
              value: "No",
            },
          ]}
          value={data.socialGrant}
          onChange={(value) => handleInputChange("socialGrant", value)}
        />
      </div>
    </div>
  );
}
