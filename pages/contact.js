import PurposeImages from "@/lib/ui/images/images";
import Map from "@/lib/ui/map/map";
import { useState, createRef } from "react";
import Button from "@/lib/ui/button/button";
import TextArea from "@/lib/ui/form-elements/textarea/textarea";
import Select from "@/lib/ui/form-elements/select/select";
import Text from "@/lib/ui/form-elements/text/text";

const Name = createRef();
const Email = createRef();
const Nature = createRef();
const Message = createRef();

export default function Contact() {
  const handleFormSubmit = async () => {
    const name = Name.current.value;
    const email = Email.current.value;
    const message = Message.current.value;
    const nature = Nature.current.value;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message, nature }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Email sent successfully");
      } else {
        alert("Failed to send email");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred");
    }
    Name.current.clear();
    Email.current.clear();
    Message.current.clear();
    Nature.current.clear();
  };

  return (
    <>
      {/* Banner */}
      <div className="section hostel">
        <div className="cutout-section">
          <div className="section-content grid grid-align_vertical-center">
            <PurposeImages color="#ffc82d" width={400} height={224} />
            <div style={{ letterSpacing: "2px" }}>
              <h1 className="font-size_xx-large font-weight_black padding-bottom_large padding-left_xxx-large">
                Contact Us
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Map */}
      <div className="section padding-top_large">
        <div className="grid grid-wrap grid-align_horizontal-spread">
          <div className="size_1-of-1  medium-size_3-of-7 contentLeft">
            <div
              className="grid grid-wrap grid-align_horizontal-space grid-align_vertical-space"
              style={{ height: "100%" }}
            >
              <div className="size_1-of-1 medium-size_1-of-2 grid grid-align_horizontal-center grid-align_vertical-center padding-top_large padding-bottom_large ">
                <div
                  className="grid grid-wrap grid-align_horizontal-center grid-align_vertical-center text-align_center color-white"
                  style={{
                    backgroundColor: "#6a0911",
                    borderRadius: "20px",
                    width: "200px",
                    height: "200px",
                  }}
                >
                  <h2 className="size_1-of-1">School Hours</h2>
                  <p className="size_1-of-1 font-size_x-medium">
                    07:20 - 14:30
                  </p>
                  <h2 className="size_1-of-1">Office Hours</h2>
                  <p className="size_1-of-1 font-size_x-medium">
                    07:00 - 14:30
                  </p>
                </div>
              </div>
              <div className="size_1-of-1 medium-size_1-of-2 grid grid-align_horizontal-center grid-align_vertical-center padding-top_large padding-bottom_large ">
                <div
                  className="grid grid-wrap grid-align_horizontal-center grid-align_vertical-center text-align_center color-white"
                  style={{
                    backgroundColor: "#6a0911",
                    borderRadius: "20px",
                    width: "200px",
                    height: "200px",
                  }}
                >
                  <h2 className="size_1-of-1">Call</h2>
                  <p className="size_1-of-1 font-size_x-medium">014 577 1129</p>
                </div>
              </div>
              <div className="size_1-of-1 medium-size_1-of-2 grid grid-align_horizontal-center grid-align_vertical-center padding-top_large padding-bottom_large ">
                <div
                  className="grid grid-wrap grid-align_horizontal-center grid-align_vertical-center text-align_center color-white"
                  style={{
                    backgroundColor: "#6a0911",
                    borderRadius: "20px",
                    width: "200px",
                    height: "200px",
                  }}
                >
                  <h2 className="size_1-of-1">Email</h2>
                  <p className="size_1-of-1 font-size_x-medium">
                    info@lsbekker.co.za
                  </p>
                </div>
              </div>
              <div className="size_1-of-1 medium-size_1-of-2 grid grid-align_horizontal-center grid-align_vertical-center padding-top_large padding-bottom_large ">
                <div
                  className="grid grid-wrap grid-align_horizontal-center grid-align_vertical-center text-align_center color-white"
                  style={{
                    backgroundColor: "#6a0911",
                    borderRadius: "20px",
                    width: "200px",
                    height: "200px",
                  }}
                >
                  <h2 className="size_1-of-1">Address</h2>
                  <p className="size_1-of-1 font-size_x-medium">
                    3H22+5XC, Magaliesburg
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="size_1-of-1 medium-size_1-of-2">
            <Map address="Laerskool Bekker" />
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="section padding-top_xx-large">
        <div className="section-content padding-bottom_xxx-large">
          <div>
            <h1 className="color-maroon">Send us a message</h1>
          </div>
          <Text type="text" placeholder="Your Name" ref={Name} />
          <Text type="email" placeholder="Your Email" ref={Email} />
          <Select
            placeholder="Nature of Query"
            ref={Nature}
            options={[
              {
                label: "Complaints",
                value: "Complaints",
              },
              {
                label: "Compliments",
                value: "Compliments",
              },
              {
                label: "General Information",
                value: "General Information",
              },
              {
                label: "My Account Status",
                value: "My Account Status",
              },
              {
                label: "New Hostel Applications",
                value: "New Hostel Applications",
              },
              {
                label: "New School Applications",
                value: "New School Applications",
              },
              {
                label: "Exemptions",
                value: "Exemptions",
              },
              {
                label: "Other",
                value: "Other",
              },
            ]}
          ></Select>
          <TextArea placeholder="Your Message" ref={Message} />
          <div className="padding-top_xx-large">
            <Button
              variant="submit"
              label="Submit"
              onClick={handleFormSubmit}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
}
