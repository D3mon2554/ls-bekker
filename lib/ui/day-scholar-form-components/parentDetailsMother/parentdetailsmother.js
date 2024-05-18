import React from "react";
import Text from "@/lib/ui/form-elements/text/text";
import TextArea from "@/lib/ui/form-elements/textarea/textarea";
import Select from "@/lib/ui/form-elements/select/select";
import Number from "@/lib/ui/form-elements/number/number";

export default function ParentDetailsMother({ data, onDataChange }) {
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
        {data.firstName_error && (
          <div className="error color-error">{data.firstName_error}</div>
        )}
      </div>
      <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
        <Text
          label="Last Name"
          value={data.lastName}
          onChange={(value) => handleInputChange("lastName", value)}
        />
        {data.lastName_error && (
          <div className="error color-error">{data.lastName_error}</div>
        )}
      </div>
      <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
        <Select
          label=" RSA-Citizen"
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
          value={data.RSACitizen}
          onChange={(value) => handleInputChange("RSACitizen", value)}
        />
        {data.RSACitizen_error && (
          <div className="error color-error">{data.RSACitizen_error}</div>
        )}
      </div>
      {data.RSACitizen === "No" && (
        <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
          <TextArea
            label="If you are not an RSA Citizen, state reason"
            value={data.IfNo}
            onChange={(value) => handleInputChange("IfNo", value)}
          />
        </div>
      )}
      <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
        <Number
          label="Identification Number"
          value={data.IDNumber}
          onChange={(value) => handleInputChange("IDNumber", value)}
        />
        {data.IDNumber_error && (
          <div className="error color-error">{data.IDNumber_error}</div>
        )}
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
        {data.Email_error && (
          <div className="error color-error">{data.Email_error}</div>
        )}
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
        {data.MaterialStatus_error && (
          <div className="error color-error">{data.MaterialStatus_error}</div>
        )}
      </div>
      <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
        <Select
          label="State whether parent/legal guardian/proxy."
          options={[
            {
              label: "Parent",
              value: "Parent",
            },
            {
              label: "Legal Guardian",
              value: "Legal Guardian",
            },
            {
              label: "Proxy",
              value: "Proxy",
            },
          ]}
          value={data.Status}
          onChange={(value) => handleInputChange("Status", value)}
        />
        {data.Status_error && (
          <div className="error color-error">{data.Status_error}</div>
        )}
      </div>
      {data?.Information?.Status === "Proxy" && (
        <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
          <p className="medium-padding-left_small">
            If the applicant is not the parent or legal guardian but the proxy:
          </p>
          <Select
            label="Has the parent/guardian authorised the application to place the pupil in the school and will they accept responsibility for the payment of school fees in advance??"
            value={data?.IfNotParent}
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
            onChange={(value) => handleInputChange("IfNotParent", value)}
          />
        </div>
      )}
    </div>
  );
}
