import React from "react";
import Text from "@/lib/ui/form-elements/text/text";
import TextArea from "@/lib/ui/form-elements/textarea/textarea";
import Select from "@/lib/ui/form-elements/select/select";
import Number from "@/lib/ui/form-elements/number/number";

export default function ContactPresentSchool({ data, onDataChange }) {
  const handleInputChange = (field, value) => {
    onDataChange(field, value);
  };

  return (
    <div className="padding-top_large">
      <div>
        <h1 className="color-maroon padding-top_large padding-bottom_large medium-padding-left_large ">
          Contact details of present school
        </h1>
      </div>
      <div className="grid grid-wrap">
        <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
          <Text
            label="First Name"
            value={data.firstName}
            onChange={(value) => handleInputChange("firstName", value)}
          />
        </div>
        <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
          <Number
            label="Contact Number"
            value={data.ContactNumber}
            onChange={(value) => handleInputChange("ContactNumber", value)}
          />
        </div>
        <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
          <Text
            label="DESIGNATION"
            value={data.designation}
            onChange={(value) => handleInputChange("designation", value)}
          />
        </div>
      </div>
      <div className="grid grid-wrap">
        <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
          <Text
            label="First Name"
            value={data.firstName1}
            onChange={(value) => handleInputChange("firstName1", value)}
          />
        </div>
        <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
          <Number
            label="Contact Number"
            value={data.ContactNumber1}
            onChange={(value) => handleInputChange("ContactNumber1", value)}
          />
        </div>
        <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
          <Text
            label="DESIGNATION"
            value={data.designation1}
            onChange={(value) => handleInputChange("designation1", value)}
          />
        </div>
      </div>
    </div>
  );
}
