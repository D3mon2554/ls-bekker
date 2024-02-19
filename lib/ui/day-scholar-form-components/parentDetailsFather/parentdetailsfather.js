import React from "react";
import Text from "@/lib/ui/form-elements/text/text";
import TextArea from "@/lib/ui/form-elements/textarea/textarea";
import Select from "@/lib/ui/form-elements/select/select";
import Number from "@/lib/ui/form-elements/number/number";

export default function ParentDetailsFather({ data, onDataChange }) {
  const handleInputChange = (field, value) => {
    onDataChange(field, value);
  };

  return (
    <div className=" grid grid-wrap">
      <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
        <Text
          label="First Name"
          value={data.firstName}
          onChange={(value) => handleInputChange("firstName", value)}
        />
      </div>
      <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
        <Text
          label="Last Name"
          value={data.lastName}
          onChange={(value) => handleInputChange("lastName", value)}
        />
      </div>
      <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
        <Number
          label="Identification Number"
          value={data.IDNumber}
          onChange={(value) => handleInputChange("IDNumber", value)}
        />
      </div>
      <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
        <Number
          label="Home Tel:"
          value={data.HomeTel}
          onChange={(value) => handleInputChange("HomeTel", value)}
        />
      </div>
      <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
        <Number
          label="Work Tel:"
          value={data.WorkTel}
          onChange={(value) => handleInputChange("WorkTel", value)}
        />
      </div>
      <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
        <Number
          label="Cell no"
          value={data.CellNo}
          onChange={(value) => handleInputChange("CellNo", value)}
        />
      </div>
      <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
        <Text
          label="Email"
          value={data.Email}
          onChange={(value) => handleInputChange("Email", value)}
        />
      </div>
      <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
        <Text
          label="Occupation"
          value={data.Occupation}
          onChange={(value) => handleInputChange("Occupation", value)}
        />
      </div>
      <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
        <Text
          label="Employer"
          value={data.Employer}
          onChange={(value) => handleInputChange("Employer", value)}
        />
      </div>
      <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
        <Select
          label="Material Status:"
          options={[
            {
              label: "Married",
              value: "Married",
            },
            {
              label: "Widowed",
              value: "Widowed",
            },
            {
              label: "Divorced",
              value: "Divorced",
            },
          ]}
          value={data.MaterialStatus}
          onChange={(value) => handleInputChange("MaterialStatus", value)}
        />
      </div>
    </div>
  );
}
