import useAppState from "@modules/app-state";
import Link from "next/link";
import styles from "./footer.module.scss";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Footer() {
  const {
    app_state: { device_width },
  } = useAppState();

  if (device_width && device_width >= 769) {
    return (
      <>
        <DesktopFooter />
      </>
    );
  }
  if (device_width && device_width < 769) {
    return (
      <>
        <MobileFooter />
      </>
    );
  }
  return null;
}

function DesktopFooter() {
  const [schoolDropdownVisible, setSchoolDropdownVisible] = useState(false);
  const [hostelDropdownVisible, setHostelDropdownVisible] = useState(false);
  const [moreDropdownVisible, setMoreDropdownVisible] = useState(false);
  const [registrationDropdownVisible, setRegistrationDropdownVisible] =
    useState(false);
  const schoolDropdownRef = useRef(null);
  const hostelDropdownRef = useRef(null);
  const registrationDropdownRef = useRef(null);
  const moreDropdownRef = useRef(null);
  const router = useRouter();

  const handleSchoolDropdownClick = () => {
    setHostelDropdownVisible(false);
    setSchoolDropdownVisible(!schoolDropdownVisible);
  };

  const handleHostelDropdownClick = () => {
    setSchoolDropdownVisible(false);
    setHostelDropdownVisible(!hostelDropdownVisible);
  };

  const handleRegistrationDropdownClick = () => {
    setSchoolDropdownVisible(false);
    setHostelDropdownVisible(false);
    setRegistrationDropdownVisible(!registrationDropdownVisible);
  };
  const handleMoreDropdownClick = () => {
    setSchoolDropdownVisible(false);
    setHostelDropdownVisible(false);
    setMoreDropdownVisible(!moreDropdownVisible);
  };

  const handleDocumentClick = (e) => {
    if (
      schoolDropdownRef.current &&
      !schoolDropdownRef.current.contains(e.target)
    ) {
      setSchoolDropdownVisible(false);
    }
    if (
      hostelDropdownRef.current &&
      !hostelDropdownRef.current.contains(e.target)
    ) {
      setHostelDropdownVisible(false);
    }
    if (
      registrationDropdownRef.current &&
      !registrationDropdownRef.current.contains(e.target)
    ) {
      setRegistrationDropdownVisible(false);
    }
    if (
      moreDropdownRef.current &&
      !moreDropdownRef.current.contains(e.target)
    ) {
      setMoreDropdownVisible(false);
    }
  };

  useEffect(() => {
    // Add a global click event listener to the document
    document.addEventListener("click", handleDocumentClick);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const isLinkActive = (href) => router.pathname === href;
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.logoContainer}`}>
        <div className={`${styles.logo}`}>
          <Link href="/">
            <Image
              src="/img/logos/crest-transparent .png"
              fill={true}
              alt="img"
            ></Image>
          </Link>
        </div>
      </div>
      <div className="grid grid-wrap size_1-of-1">
        <div className={`${styles.tabContainer} `}>
          <Link href="/" className={`${styles.content}`}>
            Home
          </Link>
          <Link
            href="/about"
            className={`${styles.content} ${
              isLinkActive("/about") ? styles.active : ""
            }`}
          >
            About us
          </Link>

          {/* School Dropdown */}
          <div ref={schoolDropdownRef}>
            <div
              className={`${styles.dropdownToggle} ${
                schoolDropdownVisible ? styles.tabClicked : ""
              } ${
                isLinkActive("/school/about-school") ||
                isLinkActive("/school/pre-primary")
                  ? styles.active
                  : ""
              }`}
              onClick={handleSchoolDropdownClick}
            >
              School
            </div>
            {schoolDropdownVisible && (
              <>
                <div className={`${styles.chevron}`} />
                <div
                  className={`${styles.dropdownContent} grid grid-wrap`}
                  onClick={() => setSchoolDropdownVisible(false)}
                >
                  <div className="size_1-of-1 ">
                    <Link
                      href="/school/about-school"
                      className={`${styles.item} `}
                    >
                      About our school
                    </Link>
                  </div>
                  <div className="size_1-of-1 ">
                    <Link
                      href="/school/pre-primary"
                      className={`${styles.item} `}
                    >
                      Pre-primary school
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Hostel Dropdown */}
          <div ref={hostelDropdownRef}>
            <div
              className={`${styles.dropdownToggle} ${
                hostelDropdownVisible ? styles.tabClicked : ""
              } ${isLinkActive("/hostel/about-hostel") ? styles.active : ""}`}
              onClick={handleHostelDropdownClick}
            >
              Hostel
            </div>
            {hostelDropdownVisible && (
              <>
                <div className={`${styles.chevron}`} />
                <div
                  className={`${styles.hostelDropdownContent} grid grid-wrap`}
                  onClick={() => setHostelDropdownVisible(false)}
                >
                  <div className="size_1-of-1 ">
                    <Link
                      href="/hostel/about-hostel"
                      className={`${styles.item} `}
                    >
                      About our hostel
                    </Link>
                  </div>
                  {/* Add other hostel links here */}
                </div>
              </>
            )}
          </div>

          {/* Registrations Dropdown */}
          <div ref={registrationDropdownRef}>
            <div
              className={`${styles.dropdownToggle} ${
                registrationDropdownVisible ? styles.tabClicked : ""
              } ${
                isLinkActive("/registration/transport") ||
                isLinkActive("/registration/applications")
                  ? styles.active
                  : ""
              }`}
              onClick={handleRegistrationDropdownClick}
            >
              Registration
            </div>
            {registrationDropdownVisible && (
              <>
                <div className={`${styles.chevron}`} />
                <div
                  className={`${styles.regDropdownContent} grid grid-wrap`}
                  onClick={() => setRegistrationDropdownVisible(false)}
                >
                  <div className="size_1-of-1 ">
                    <Link
                      href="/registration/transport"
                      className={`${styles.item}`}
                    >
                      transport
                    </Link>
                  </div>
                  <div className="size_1-of-1 ">
                    <Link
                      href="/registration/applications"
                      className={`${styles.item} `}
                    >
                      Applications
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* More Dropdown */}
          <div ref={moreDropdownRef}>
            <div
              className={`${styles.dropdownToggle} ${
                moreDropdownVisible ? styles.tabClicked : ""
              } ${
                isLinkActive("/more/fees") || isLinkActive("/more/upcomming")
                  ? styles.active
                  : ""
              }`}
              onClick={handleMoreDropdownClick}
            >
              More
            </div>
            {moreDropdownVisible && (
              <>
                <div className={`${styles.chevron}`} />
                <div
                  className={`${styles.moreDropdownContent} grid grid-wrap`}
                  onClick={() => setMoreDropdownVisible(false)}
                >
                  <div className="size_1-of-1 ">
                    <Link href="/more/fees" className={`${styles.item}`}>
                      Fees
                    </Link>
                  </div>
                  <div className="size_1-of-1 ">
                    <Link href="/more/upcomming" className={`${styles.item} `}>
                      Upcoming Events
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>

          <Link
            href="/contact"
            className={`${styles.content} ${
              isLinkActive("/contact") ? styles.active : ""
            }`}
          >
            Contact Us
          </Link>
        </div>
        <div className="size_1-of-1 padding-left_x-large color-white padding-right_xxx-large">
          <p>
            Popia Disclaimer:<br></br> The content displayed on this platform is
            the intellectual property of Laerskool Bekker Primary. You may not
            reuse, republish, or reprint such content without our written
            consent. While the information on this platform has been verified to
            the best of our abilities, we cannot guarantee that there are no
            errors or omissions. We reserve the right to change and amend
            content at any time. It is your responsibility to ensure that you
            are up to date with the latest changes.
          </p>
        </div>
      </div>
    </div>
  );
}

function MobileFooter() {
  return (
    <div
      className={`grid grid-align_horizontal-center grid-wrap color-white ${styles.footer}`}
    >
      <div
        className={`font-size_small grid grid-vertical size_1-of-1 padding-around_xx-large grid grid-align_vertical-center`}
      >
        <div className="grid grid-align_vertical-center padding-bottom_xx-large grid-align_horizontal-center size_1-of-1">
          <Image
            src="/img/logos/RegalTrainingSolutionsLogo-04.png"
            alt="img"
            width={201}
            height={52.96}
          ></Image>
        </div>

        <div className="grid grid-align_vertical-center padding-bottom_xx-large grid-align_horizontal-even size_1-of-1">
          <div className="">
            <Link href="/" className={`${styles.home}`}>
              Home
            </Link>
          </div>
          <div className="">
            <Link href="/programs" className={`${styles.home}`}>
              Our Programs
            </Link>
          </div>
          <div className="">
            <Link href="/about" className={`${styles.home}`}>
              About
            </Link>
          </div>
          <div className="">
            <Link href="/contact" className={`${styles.home}`}>
              Contact Us
            </Link>
          </div>
        </div>

        <div className="grid grid-align_vertical-center padding-bottom_xx-large grid-align_horizontal-center size_1-of-1">
          <div>Copyright © 2022 Your Learning Path</div>
        </div>
        <div
          className={`grid grid-align_vertical-center padding-bottom_large grid-align_horizontal-center size_1-of-1`}
        >
          <div>
            Popia Disclaimer:
            <div>
              The content displayed on this platform is the intellectual
              property of Regal Training Solutions (Pty) Ltd. You may not reuse,
              republish, or reprint such content without our written consent.
              While the information on this platform has been verified to the
              best of our abilities, we cannot guarantee that there are no
              errors or omissions. We reserve the right to change and amend
              content at any time. It is your responsibility to ensure that you
              up to date with the latest changes.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
