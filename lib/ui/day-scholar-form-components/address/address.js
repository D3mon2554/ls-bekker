import Text from "../../form-elements/text/text";
import TextArea from "../../form-elements/textarea/textarea";
import Number from "../../form-elements/number/number";

export default function AddressInformation({ data, onDataChange }) {
  const handleInputChange = (field, value) => {
    onDataChange(field, value);
  };
  return (
    <>
      <div className="padding-top_large padding-bottom_large">
        <h1 className="color-maroon padding-top_large padding-bottom_large medium-padding-left_large ">
          Home Address
        </h1>
        <div className="grid grid-wrap">
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Text
              label="Address"
              value={data.homeAddress}
              onChange={(value) => handleInputChange("homeAddress", value)}
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Text
              label="Apartment,Suite,etc."
              value={data.HomeApartment}
              onChange={(value) => handleInputChange("HomeApartment", value)}
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Text
              label="City"
              value={data.HomeCity}
              onChange={(value) => handleInputChange("HomeCity", value)}
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Text
              label="Province"
              value={data.HomeProvince}
              onChange={(value) => handleInputChange("HomeProvince", value)}
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Text
              label="Country"
              value={data.HomeCountry}
              onChange={(value) => handleInputChange("HomeCountry", value)}
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Number
              label="Postal code"
              value={data.HomePostal}
              onChange={(value) => handleInputChange("HomePostal", value)}
            />
          </div>
        </div>
      </div>
      <div className="padding-top_large padding-bottom_large">
        <h1 className="color-maroon padding-top_large padding-bottom_large medium-padding-left_large ">
          Work Address
        </h1>
        <div className="grid grid-wrap">
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Text
              label="Address"
              value={data.WorkAddress}
              onChange={(value) => handleInputChange("WorkAddress", value)}
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Text
              label="Apartment,Suite,etc."
              value={data.WorkApartment}
              onChange={(value) => handleInputChange("WorkApartment", value)}
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Text
              label="City"
              value={data.WorkCity}
              onChange={(value) => handleInputChange("WorkCity", value)}
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Text
              label="Province"
              value={data.WorkProvince}
              onChange={(value) => handleInputChange("WorkProvince", value)}
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Text
              label="Country"
              value={data.WorkCountry}
              onChange={(value) => handleInputChange("WorkCountry", value)}
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-3 padding-around_small">
            <Number
              label="Postal code"
              value={data.WorkPostal}
              onChange={(value) => handleInputChange("WorkPostal", value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
