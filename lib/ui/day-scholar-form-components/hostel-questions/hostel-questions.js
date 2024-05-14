import React from "react";
import Text from "@/lib/ui/form-elements/text/text";
import TextArea from "@/lib/ui/form-elements/textarea/textarea";
import Select from "@/lib/ui/form-elements/select/select";
import Number from "@/lib/ui/form-elements/number/number";

export default function HostelQuestions({ data, onDataChange }) {
  const handleInputChange = (field, value) => {
    onDataChange(field, value);
  };

  return (
    <div className="padding-top_large">
      <div className="grid grid-wrap">
        <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
          <TextArea
            label="Academic Achievements"
            value={data.academicachievements}
            onChange={(value) =>
              handleInputChange("academicachievements", value)
            }
          />
        </div>

        <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
          <TextArea
            label="Extramural Activities"
            value={data.extramuralactivities}
            onChange={(value) =>
              handleInputChange("extramuralactivities", value)
            }
          />
        </div>
        <div className="size_1-of-1 medium-size_1-of-1 grid grid-wrap padding-around_small">
          <p className="padding-right_large">I</p>
          <div className="size_1-of-1 medium-size_1-of-3 padding-right_large">
            <Select
              label=""
              options={[
                {
                  label: "object",
                  value: "object",
                },
                {
                  label: "have no objections",
                  value: "have no objections",
                },
              ]}
              value={data.object}
              onChange={(value) => handleInputChange("object", value)}
            />
          </div>
          <p>
            to my child reasonably participating in the extramural activities of
            the School and Hostel.
          </p>
        </div>
        <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
          <TextArea
            label="REASONS for placing the child / children in a hostel:"
            value={data.reasonforplacingchild}
            onChange={(value) =>
              handleInputChange("reasonforplacingchild", value)
            }
          />
        </div>
        <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
          <TextArea
            label="Does your child have any medical condition that we need to know of?"
            value={data.medicalcontitions}
            onChange={(value) => handleInputChange("medicalcontitions", value)}
          />
        </div>
        <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
          <TextArea
            label="Does your child have a bedwetting problem?"
            value={data.bedwetting}
            onChange={(value) => handleInputChange("bedwetting", value)}
          />
        </div>
        <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
          <TextArea
            label="Does your child take any chronic medicine that we have to administer through the week:"
            value={data.medicine}
            onChange={(value) => handleInputChange("medicine", value)}
          />
        </div>
        <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
          <TextArea
            label="Is your child allergic to any medicine?"
            value={data.allergicmedicine}
            onChange={(value) => handleInputChange("allergicmedicine", value)}
          />
        </div>
        <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
          <TextArea
            label="Is your child allergic to any food?"
            value={data.allergicfood}
            onChange={(value) => handleInputChange("allergicfood", value)}
          />
        </div>
      </div>
    </div>
  );
}
