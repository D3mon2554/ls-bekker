import React from "react";
import Text from "@/lib/ui/form-elements/text/text";
import Number from "@/lib/ui/form-elements/number/number";
import Select from "../../form-elements/select/select";
import TextArea from "../../form-elements/textarea/textarea";

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
              {learner.Information.firstName}{" "}
              {learner.Information.lastName + " "}
              Learner Information
            </h1>
            <div className="sub-section size_1-of-1 grid grid-wrap">
              <div className="size_1-of-1 medium-size_1-of-4 padding-around_small">
                <Text
                  label="Grade applied for:"
                  value={learner.Information.PresentGrade}
                  onChange={(value) =>
                    handleInputChange(index, "PresentGrade", value)
                  }
                />
              </div>
              <div className="size_1-of-1 medium-size_1-of-4 padding-around_small">
                <Text
                  label="Highest Grade Passed"
                  value={learner.Information.YearsIngGrade}
                  onChange={(value) =>
                    handleInputChange(index, "YearsIngGrade", value)
                  }
                />
              </div>
              <div className="size_1-of-1 medium-size_1-of-4 padding-around_small">
                <Text
                  label="Year when grade was passed"
                  value={learner.Information.PresentSchool}
                  onChange={(value) =>
                    handleInputChange(index, "PresentSchool", value)
                  }
                />
              </div>
              <div className="size_1-of-1 medium-size_1-of-4 padding-around_small">
                <Text
                  label="Accession No"
                  value={learner.Information.accession_no}
                  onChange={(value) =>
                    handleInputChange(index, "accession_no", value)
                  }
                />
              </div>
            </div>
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
              <Text
                label="Initials"
                value={learner.Information.initials}
                onChange={(value) =>
                  handleInputChange(index, "initials", value)
                }
              />
            </div>
            <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
              <Text
                label="Nick Name"
                value={learner.Information.nickName}
                onChange={(value) =>
                  handleInputChange(index, "nickName", value)
                }
              />
            </div>
            <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
              <Text
                label="Other Names"
                value={learner.Information.otherNames}
                onChange={(value) =>
                  handleInputChange(index, "otherNames", value)
                }
              />
            </div>
            <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
              <Text
                label="Date Of Birth"
                value={learner.Information.dob}
                onChange={(value) => handleInputChange(index, "dob", value)}
              />
            </div>
            <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
              <Select
                label="Gender"
                options={[
                  {
                    label: "Male",
                    value: "Male",
                  },
                  {
                    label: "Female",
                    value: "Female",
                  },
                ]}
                value={learner.Information.Gender}
                onChange={(value) => handleInputChange(index, "Gender", value)}
              />
            </div>
            <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
              <Text
                label="Race"
                value={learner.Information.race}
                onChange={(value) => handleInputChange(index, "race", value)}
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
                label="Country of Residence"
                value={learner.Information.Country_of_residence}
                onChange={(value) =>
                  handleInputChange(index, "Country_of_residence", value)
                }
              />
            </div>
            <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
              <Text
                label="Citizenship"
                value={learner.Information.Citizenship}
                onChange={(value) =>
                  handleInputChange(index, "Citizenship", value)
                }
              />
            </div>
            <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
              <Text
                label="If SA, indicate province of residence"
                value={learner.Information.Province}
                onChange={(value) =>
                  handleInputChange(index, "Province", value)
                }
              />
            </div>
            <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
              <TextArea
                label="Physical Address"
                value={learner.Information.address}
                onChange={(value) => handleInputChange(index, "address", value)}
              />
            </div>
            <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
              <Text
                label="City/Suburb"
                value={learner.Information.City}
                onChange={(value) => handleInputChange(index, "City", value)}
              />
            </div>
            <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
              <Text
                label="Code"
                value={learner.Information.postal_code}
                onChange={(value) =>
                  handleInputChange(index, "postal_code", value)
                }
              />
            </div>
            <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
              <Text
                label="Home Telephone"
                value={learner.Information.Home_tell}
                onChange={(value) =>
                  handleInputChange(index, "Home_tell", value)
                }
              />
            </div>
            <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
              <Text
                label="Emergency Telephone"
                value={learner.Information.Emergency_tell}
                onChange={(value) =>
                  handleInputChange(index, "Emergency_tell", value)
                }
              />
            </div>
            <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
              <Text
                label="Learner Cell"
                value={learner.Information.learnerCell}
                onChange={(value) =>
                  handleInputChange(index, "learnerCell", value)
                }
              />
            </div>
            <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
              <Text
                label="Learner Email Address"
                value={learner.Information.learnerEmail}
                onChange={(value) =>
                  handleInputChange(index, "learnerEmail", value)
                }
              />
            </div>
            <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
              <Text
                label="Home Language"
                value={learner.Information.home_language}
                onChange={(value) =>
                  handleInputChange(index, "home_language", value)
                }
              />
            </div>
            <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
              <Text
                label="Preferred Language of Instruction"
                value={learner.Information.preferred_language_of_instruction}
                onChange={(value) =>
                  handleInputChange(
                    index,
                    "preferred_language_of_instruction",
                    value
                  )
                }
              />
            </div>
            <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
              <Select
                label="Boarder"
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
                value={learner.Information.boarder}
                onChange={(value) => handleInputChange(index, "boarder", value)}
              />
            </div>
            <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
              <Select
                label="Deceased Parent"
                options={[
                  {
                    label: "Mother",
                    value: "Mother",
                  },
                  {
                    label: "Father",
                    value: "Father",
                  },
                  {
                    label: "Both",
                    value: "Both",
                  },
                ]}
                value={learner.Information.deceased}
                onChange={(value) =>
                  handleInputChange(index, "deceased", value)
                }
              />
            </div>
            <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
              <Text
                label="Mode of transport"
                value={learner.Information.mode_of_transport}
                onChange={(value) =>
                  handleInputChange(index, "mode_of_transport", value)
                }
              />
            </div>
            <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
              <Text
                label="Religion"
                value={learner.Information.religion}
                onChange={(value) =>
                  handleInputChange(index, "religion", value)
                }
              />
            </div>
            <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
              <Select
                label="For Grade 1 only"
                description="Indicate pre-primary education"
                options={[
                  {
                    label: "None",
                    value: "None",
                  },
                  {
                    label: "Non Formal",
                    value: "Non Formal",
                  },
                  {
                    label: "Formal",
                    value: "Formal",
                  },
                ]}
                value={learner.Information.preprimaryeduacation}
                onChange={(value) =>
                  handleInputChange(index, "preprimaryeduacation", value)
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
            {learner.Information.firstName} {learner.Information.lastName + " "}
            Learner Information
          </h1>

          <div className="sub-section size_1-of-1 grid grid-wrap">
            <div className="size_1-of-1 medium-size_1-of-4 padding-around_small">
              <Text
                label="Grade applied for:"
                value={learner.Information.PresentGrade}
                onChange={(value) =>
                  handleInputChange(index, "PresentGrade", value)
                }
              />
            </div>
            <div className="size_1-of-1 medium-size_1-of-4 padding-around_small">
              <Text
                label="Highest Grade Passed"
                value={learner.Information.YearsIngGrade}
                onChange={(value) =>
                  handleInputChange(index, "YearsIngGrade", value)
                }
              />
            </div>
            <div className="size_1-of-1 medium-size_1-of-4 padding-around_small">
              <Text
                label="Year when grade was passed"
                value={learner.Information.PresentSchool}
                onChange={(value) =>
                  handleInputChange(index, "PresentSchool", value)
                }
              />
            </div>
            <div className="size_1-of-1 medium-size_1-of-4 padding-around_small">
              <Text
                label="Accession No"
                value={learner.Information.accession_no}
                onChange={(value) =>
                  handleInputChange(index, "accession_no", value)
                }
              />
            </div>
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Text
              label="First Name"
              value={learner.Information.firstName}
              onChange={(value) => handleInputChange(index, "firstName", value)}
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Text
              label="Last Name"
              value={learner.Information.lastName}
              onChange={(value) => handleInputChange(index, "lastName", value)}
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Text
              label="Initials"
              value={learner.Information.initials}
              onChange={(value) => handleInputChange(index, "initials", value)}
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Text
              label="Nick Name"
              value={learner.Information.nickName}
              onChange={(value) => handleInputChange(index, "nickName", value)}
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Text
              label="Other Names"
              value={learner.Information.otherNames}
              onChange={(value) =>
                handleInputChange(index, "otherNames", value)
              }
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Text
              label="Date Of Birth"
              value={learner.Information.dob}
              onChange={(value) => handleInputChange(index, "dob", value)}
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Select
              label="Gender"
              options={[
                {
                  label: "Male",
                  value: "Male",
                },
                {
                  label: "Female",
                  value: "Female",
                },
              ]}
              value={learner.Information.Gender}
              onChange={(value) => handleInputChange(index, "Gender", value)}
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Text
              label="Race"
              value={learner.Information.race}
              onChange={(value) => handleInputChange(index, "race", value)}
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Number
              label="Identification Number"
              value={learner.Information.IDNumber}
              onChange={(value) => handleInputChange(index, "IDNumber", value)}
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Text
              label="Country of Residence"
              value={learner.Information.Country_of_residence}
              onChange={(value) =>
                handleInputChange(index, "Country_of_residence", value)
              }
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Text
              label="Citizenship"
              value={learner.Information.Citizenship}
              onChange={(value) =>
                handleInputChange(index, "Citizenship", value)
              }
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Text
              label="If SA, indicate province of residence"
              value={learner.Information.Province}
              onChange={(value) => handleInputChange(index, "Province", value)}
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <TextArea
              label="Physical Address"
              value={learner.Information.address}
              onChange={(value) => handleInputChange(index, "address", value)}
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Text
              label="City/Suburb"
              value={learner.Information.City}
              onChange={(value) => handleInputChange(index, "City", value)}
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Text
              label="Code"
              value={learner.Information.postal_code}
              onChange={(value) =>
                handleInputChange(index, "postal_code", value)
              }
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Text
              label="Home Telephone"
              value={learner.Information.Home_tell}
              onChange={(value) => handleInputChange(index, "Home_tell", value)}
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Text
              label="Emergency Telephone"
              value={learner.Information.Emergency_tell}
              onChange={(value) =>
                handleInputChange(index, "Emergency_tell", value)
              }
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Text
              label="Learner Cell"
              value={learner.Information.learnerCell}
              onChange={(value) =>
                handleInputChange(index, "learnerCell", value)
              }
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Text
              label="Learner Email Address"
              value={learner.Information.learnerEmail}
              onChange={(value) =>
                handleInputChange(index, "learnerEmail", value)
              }
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Text
              label="Home Language"
              value={learner.Information.home_language}
              onChange={(value) =>
                handleInputChange(index, "home_language", value)
              }
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Text
              label="Preferred Language of Instruction"
              value={learner.Information.preferred_language_of_instruction}
              onChange={(value) =>
                handleInputChange(
                  index,
                  "preferred_language_of_instruction",
                  value
                )
              }
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Select
              label="Boarder"
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
              value={learner.Information.boarder}
              onChange={(value) => handleInputChange(index, "boarder", value)}
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Select
              label="Deceased Parent"
              options={[
                {
                  label: "Mother",
                  value: "Mother",
                },
                {
                  label: "Father",
                  value: "Father",
                },
                {
                  label: "Both",
                  value: "Both",
                },
              ]}
              value={learner.Information.deceased}
              onChange={(value) => handleInputChange(index, "deceased", value)}
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Text
              label="Mode of transport"
              value={learner.Information.mode_of_transport}
              onChange={(value) =>
                handleInputChange(index, "mode_of_transport", value)
              }
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Text
              label="Religion"
              value={learner.Information.religion}
              onChange={(value) => handleInputChange(index, "religion", value)}
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Select
              label="For Grade 1 only"
              description="Indicate pre-primary education"
              options={[
                {
                  label: "None",
                  value: "None",
                },
                {
                  label: "Non Formal",
                  value: "Non Formal",
                },
                {
                  label: "Formal",
                  value: "Formal",
                },
              ]}
              value={learner.Information.preprimaryeduacation}
              onChange={(value) =>
                handleInputChange(index, "preprimaryeduacation", value)
              }
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
