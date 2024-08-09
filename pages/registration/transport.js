import React, { useState } from "react";
import PurposeImages from "@/lib/ui/images/images";
import Image from "next/image";
import Button from "@/lib/ui/button/button";
import Link from "next/link";
import Map from "@/lib/ui/map/map";
import TaxiDetails from "@/lib/ui/taxiRoutes/taxi-details";
import Head from "next/head";

export default function Transport() {
  const initialAddress = "Laerskool Bekker Primary";
  const [address, setAddress] = useState(initialAddress);

  const handleSpanClick = (newAddress) => {
    setAddress(newAddress);
  };

  const handleDayBusTariffsClick = () => {
    const url = process.env.AWS_FILE_URL_DAY;
    console.log("AWS_FILE_URL_DAY", url);
    window.open(url, "_blank", "noopener noreferrer");
  };

  const handleWeekendBusTariffsClick = () => {
    window.open(
      process.env.AWS_FILE_URL_WEEKEND,
      "_blank",
      "noopener noreferrer"
    );
  };

  return (
    <>
      {/* Head */}
      <Head>
        <title>Transport | Laerskool Bekker Primary</title>
        <meta
          name="description"
          content="Learn about the transportation services provided by Laerskool Bekker Primary, including bus routes, tariffs, and application processes. Secure a seat for your child on our school buses today."
        />
        <meta
          name="keywords"
          content="Laerskool Bekker Primary transport, school bus services, transport routes, school transport application, bus tariffs, day bus, weekend bus"
        />
        <meta name="author" content="Laerskool Bekker Primary" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Transport | Laerskool Bekker Primary"
        />
        <meta
          property="og:description"
          content="Learn about the transportation services provided by Laerskool Bekker Primary, including bus routes, tariffs, and application processes. Secure a seat for your child on our school buses today."
        />
        <meta
          property="og:image"
          content="https://lsbekker.com/img/transport-banner.jpg"
        />
        <meta
          property="og:url"
          content="https://lsbekker.com/registration/transport"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Laerskool Bekker Primary" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Transport | Laerskool Bekker Primary"
        />
        <meta
          name="twitter:description"
          content="Learn about the transportation services provided by Laerskool Bekker Primary, including bus routes, tariffs, and application processes. Secure a seat for your child on our school buses today."
        />
        <meta
          name="twitter:image"
          content="https://lsbekker.com/img/transport-banner.jpg"
        />
        <link
          rel="canonical"
          href="https://lsbekker.com/registration/transport"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <script type="application/ld+json">
          {`
    {
      "@context": "http://schema.org",
      "@type": "Organization",
      "name": "Laerskool Bekker Primary",
      "url": "https://lsbekker.com/registration/transport",
      "logo": "https://lsbekker.com/img/school-logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Laerskool Bekker Primary",
        "addressLocality": "Magaliesburg",
        "addressRegion": "Gauteng",
        "postalCode": "1791",
        "addressCountry": "ZA"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+27-14-576-0040",
        "contactType": "Customer Service"
      },
      "description": "Learn about the transportation services provided by Laerskool Bekker Primary, including bus routes, tariffs, and application processes. Secure a seat for your child on our school buses today."
    }
    `}
        </script>
      </Head>

      {/* Banner */}
      <div className="section transport">
        <div className="cutout-section">
          <div className="section-content grid grid-align_vertical-center">
            <PurposeImages color="#ffc82d" width={430} height={154} />
            <div style={{ letterSpacing: "2px" }}>
              <h1 className="font-size_xx-large font-weight_black padding-bottom_large">
                Transport
              </h1>
              <p className="font-size_x-medium">
                Due to the rapid growth of learners making use of bus transport,
                parents need to apply for their children for a seat on the bus.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Who provides the service */}
      <div className="section  grid grid-wrap grid-align_vertical-center">
        <div className=" medium-padding-left_xxx-large medium-padding-right_xxx-large padding-left_medium padding-right_medium">
          <div className=" size_1-of-1  padding-bottom_xxx-large color-maroon padding-top_xxx-large">
            <h1>
              BEKKER PRIMARY BUS SERVICES ARE BEING ADMINISTRATED BY BEKKER HIGH
              SCHOOL
            </h1>
          </div>
          <div className="size_1-of-1">
            <p className="font-size_x-medium">
              Due to the rapid growth of learners making use of bus transport,
              parents need to apply for their children for a seat on the bus. A
              fee will be charged for the reservation of a seat and is called a
              seat fee. Proof of payment of a non-refundable seat fee of R
              200.00 must be handed in at Bekker High School to book a seat on a
              bus.
              <br />
              <br />
              A month ticket must be purchased no later than the 7th of each
              month for day trips. The day tickets will only be valid for a
              specific month. The school days are counted and the amount worked
              out for a year, that amount is divided into 11 months, so you have
              to pay for 11 months regardless of whether your child is using it
              or not. Even if there are school holidays, you pay the monthly
              fee. If your child only wants to make use of the bus once a day,
              you still have to pay the monthly fee.
              <br />
              <br />
              If your child doesn’t use the bus on some days, you forfeit the
              day’s fees. Weekend routes will have an option to buy a month
              ticket or to buy tokens as you need it. Please note if you buy
              tokens it will be more expensive per trip. The fees will be liable
              before a month starts. You may pay in advance for the whole year,
              but if you want to pay monthly, you may use the debit order
              included in the application. Fees for January will have to be in
              cash. If the debit order returns unpaid, your child will lose the
              seat on the bus and a child on the waiting list will get the seat.
            </p>
          </div>
        </div>
      </div>
      {/* Routes */}
      <div className="section">
        <div className="section-content padding-top_xx-large padding-bottom_xx-large">
          <h1 className="color-maroon">Routes</h1>
        </div>
        <div className="grid grid-wrap">
          <div className="size_1-of-1 medium-size_1-of-2">
            <div>
              <Map address={address} handleSpanClick={handleSpanClick} />
            </div>
          </div>
          <div className="size_1-of-1 medium-size_1-of-2">
            <div className="medium-padding-left_xxx-large padding-left_medium padding-right_medium padding-bottom_large padding-top_large">
              <p className="color-maroon font-size_x-medium font-weight_black padding-bottom_large">
                Centurion
                <span
                  className="font-weight_regular cursor"
                  onClick={() =>
                    handleSpanClick("2 Bloukrans Rd, Highveld, Centurion, 0157")
                  }
                >
                  | Groot Makro
                </span>
                <br />
                Fourways
                <span
                  className="font-weight_regular cursor"
                  onClick={() => handleSpanClick("Fourways Crossing")}
                >
                  | Fourways Crossing
                </span>
                <br />
                Midrand
                <span
                  className="font-weight_regular cursor"
                  onClick={() =>
                    handleSpanClick("Lever Road, Kiaat St, Midrand, 1687")
                  }
                >
                  |Noorwyk Shell: Leader road
                </span>
                <br />
                Northgate
                <span
                  className="font-weight_regular cursor"
                  onClick={() => handleSpanClick("Ticketpro Dome")}
                >
                  | Northgate Dome
                </span>
                <br />
                Pinehaven
                <span
                  className="font-weight_regular cursor"
                  onClick={() => handleSpanClick("Sasol Pinehaven")}
                >
                  | Sasol Garage – N14 Crossing
                </span>
                <br />
                Randfontein
                <span
                  className="font-weight_regular cursor"
                  onClick={() =>
                    handleSpanClick("Lafarge Cement Randfontein Plant")
                  }
                >
                  | Cement Factory on Main Road
                </span>
                <br />
                Rustenburg
                <span
                  className="font-weight_regular cursor"
                  onClick={() =>
                    handleSpanClick("Builders Warehouse Rustenburg")
                  }
                >
                  | Builders Warehouse
                </span>
                <br />
                Vaaldriehoek
                <span
                  className="font-weight_regular cursor"
                  onClick={() => handleSpanClick("Vaal Mall")}
                >
                  | Vaal Mall
                </span>
                <br />
                Westonaria
                <span
                  className="font-weight_regular cursor"
                  onClick={() => handleSpanClick("R28 & Reaikaga")}
                >
                  | R28 Offramp/ Reaikaga
                </span>
                <br />
              </p>
              {/* <div className="">
                <Link href="">
                  <Button variant="submit" label="Download Info" />
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* Taxi Routes and Contact Details */}
      <div className="section">
        <div className="section-content">
          <div className="padding-top_xx-large padding-bottom_xx-large">
            <h1 className="color-maroon">Taxi Details and Routes</h1>
          </div>
        </div>
        <TaxiDetails />
      </div>
      {/* Route Enquiries */}
      <div className="size_1-of-1 medium-padding-left_xxx-large ">
        <div className="grid grid-wrap ">
          <div className="size_1-of-1 medium-size_1-of-2 padding-around_medium medium-padding-around_none grid grid-wrap grid-align_vertical-space">
            <div className="color-maroon size_1-of-1">
              <h1 className="padding-top_xx-large padding-bottom_medium">
                Route Enquiries
              </h1>
              <p className="font-size_x-medium padding-bottom_large">
                Mr. Wandrag
              </p>
              <div className="line"></div>

              <div className="font-size_x-medium font-weight_medium padding-top_large padding-bottom_medium">
                <Link
                  style={{ textDecoration: "none", color: "#6a0911" }}
                  href={`mailto:general@bekkerhs.co.za`}
                >
                  general@bekkerhs.co.za
                </Link>
              </div>

              <div className="font-size_x-medium font-weight_medium">
                <Link
                  style={{ textDecoration: "none", color: "#6a0911" }}
                  href={`tel:0828513745`}
                >
                  082 851 3745
                </Link>
              </div>
            </div>
            <div className="grid grid-wrap size_1-of-1 padding-bottom_large padding-top_large">
              <div className="size_1-of-1 medium-size_1-of-2">
                <Button
                  variant="submit"
                  label="Day Bus Tariffs"
                  onClick={handleDayBusTariffsClick}
                />
              </div>
              <div className="size_1-of-1 medium-size_1-of-2 padding-top_large medium-padding-top_none">
                <Button
                  variant="submit"
                  label="Weekend Bus Tariffs"
                  onClick={handleWeekendBusTariffsClick}
                />
              </div>
            </div>
          </div>
          <div className="size_1-of-1 medium-size_1-of-2">
            <div
              style={{ position: "relative", height: "400px", width: "100%" }}
            >
              <Image src="/img/registration/desk.jpg" alt="Routes" fill />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
