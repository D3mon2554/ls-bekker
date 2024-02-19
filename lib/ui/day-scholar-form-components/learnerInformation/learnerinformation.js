import React from "react";
import Text from "@/lib/ui/form-elements/text/text";
import Number from "@/lib/ui/form-elements/number/number";

export default function LearnerInformation({
  data,
  onDataChange,
  onAddLearner,
  onRemoveLearner,
}) {
  const handleInputChange = (index, field, value) => {
    onDataChange(index, field, value);
  };

  return (
    <>
      {Array.isArray(data) && data.length > 0 ? (
        data.map((learner, index) => (
          <div key={index} className="grid grid-wrap">
            <h1 className="color-maroon padding-top_large padding-bottom_large medium-padding-left_large size_1-of-1">
              Learner Information
            </h1>

            <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
              <Text
                label="First Name"
                value={learner.Information.firstName}
                onChange={(value) =>
                  handleInputChange(index, "firstName", value)
                }
              />
            </div>
            <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
              <Text
                label="Last Name"
                value={learner.Information.lastName}
                onChange={(value) =>
                  handleInputChange(index, "lastName", value)
                }
              />
            </div>
            <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
              <Number
                label="Identification Number"
                value={learner.Information.IDNumber}
                onChange={(value) =>
                  handleInputChange(index, "IDNumber", value)
                }
              />
            </div>
            <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
              <Text
                label="Present grade"
                value={learner.Information.PresentGrade}
                onChange={(value) =>
                  handleInputChange(index, "PresentGrade", value)
                }
              />
            </div>
            <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
              <Text
                label="Years in grade"
                value={learner.Information.YearsIngGrade}
                onChange={(value) =>
                  handleInputChange(index, "YearsIngGrade", value)
                }
              />
            </div>
            <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
              <Text
                label="Present School"
                value={learner.Information.PresentSchool}
                onChange={(value) =>
                  handleInputChange(index, "PresentSchool", value)
                }
              />
            </div>

            <div className="size_1-of-1">
              {index > 0 && (
                <button onClick={() => onRemoveLearner(index)}>
                  Remove Learner
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <div className="grid grid-wrap">
          {/* Only one entry for LearnerInformation */}
          <h1 className="color-maroon padding-top_large padding-bottom_large medium-padding-left_large size_1-of-1">
            Learner Information
          </h1>

          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Text
              label="First Name"
              value={data[0].Information.firstName}
              onChange={(value) => handleInputChange(0, "firstName", value)}
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Text
              label="Last Name"
              value={data[0].Information.lastName}
              onChange={(value) => handleInputChange(0, "lastName", value)}
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Number
              label="Identification Number"
              value={data[0].Information.IDNumber}
              onChange={(value) => handleInputChange(0, "IDNumber", value)}
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Text
              label="Present grade"
              value={data[0].Information.PresentGrade}
              onChange={(value) => handleInputChange(0, "PresentGrade", value)}
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Text
              label="Years in grade"
              value={data[0].Information.YearsIngGrade}
              onChange={(value) => handleInputChange(0, "YearsIngGrade", value)}
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Text
              label="Present School"
              value={data[0].Information.PresentSchool}
              onChange={(value) => handleInputChange(0, "PresentSchool", value)}
            />
          </div>

          <div className="size_1-of-1">
            {onRemoveLearner && (
              <button onClick={() => onRemoveLearner(0)}>Remove Learner</button>
            )}
          </div>
        </div>
      )}

      <div>
        <button onClick={onAddLearner}>Add Learner</button>
      </div>
    </>
  );
}
