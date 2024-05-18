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
            label="Name of previous school"
            value={data.name_of_previous_school}
            onChange={(value) =>
              handleInputChange("name_of_previous_school", value)
            }
          />
        </div>
        <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
          <Number
            label="Previous school address"
            value={data.previous_school_address}
            onChange={(value) =>
              handleInputChange("previous_school_address", value)
            }
          />
        </div>
        <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
          <Text
            label="Province"
            value={data.province}
            onChange={(value) => handleInputChange("province", value)}
          />
        </div>
      </div>
      <div className="grid grid-wrap">
        <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
          <Text
            label="Country"
            value={data.country}
            onChange={(value) => handleInputChange("country", value)}
          />
        </div>
        <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
          <Number
            label="Postal Code"
            value={data.code}
            onChange={(value) => handleInputChange("code", value)}
          />
        </div>
        <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
          <TextArea
            label="Contact Person Details"
            value={data.cpd}
            onChange={(value) => handleInputChange("cpd", value)}
          />
        </div>
      </div>
    </div>
  );
}
