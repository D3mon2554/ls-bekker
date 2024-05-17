import React from "react";
import Checkbox from "@/lib/ui/form-elements/checkbox/checkbox";
import Text from "@/lib/ui/form-elements/text/text";
import DatePicker from "@/lib/ui/form-elements/date/date";

const Acknowledgement = ({ data, onDataChange }) => {
  const handleInputChange = (field, value) => {
    onDataChange(field, value);
  };

  return (
    <div className="grid grid-wrap padding-top_large padding-bottom_large">
      <div>
        <h1 className="color-maroon padding-bottom_large">Acknowledgement</h1>
      </div>
      <div className="size_1-of-1 medium-size_1-of-1 padding-around_small">
        <Checkbox
          label="I hereby declare that to the best of my knowledge, the above information as supplied is accurate and correct."
          onChange={(value) => handleInputChange("hereby", value)}
          checked={data.hereby}
          required
        />
        {data.hereby_error && (
          <div className="error color-error">{data.hereby_error}</div>
        )}
      </div>
      <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
        <Text
          label="Name"
          value={data.Name}
          onChange={(value) => handleInputChange("Name", value)}
          required
        />
        {data.Name_error && (
          <div className="error color-error">{data.Name_error}</div>
        )}
      </div>
      <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
        <Text
          label="Surname"
          value={data.Surname}
          onChange={(value) => handleInputChange("Surname", value)}
          required
        />
        {data.Surname_error && (
          <div className="error color-error">{data.Surname_error}</div>
        )}
      </div>
      <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
        <div>
          <DatePicker
            label="Date"
            value={data.date}
            onChange={(value) => handleInputChange("date", value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Acknowledgement;
