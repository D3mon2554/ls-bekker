import useAppState from "@modules/app-state";
import Image from "next/image";
import Link from "next/link";
import Button from "@ui/button";
import styles from "./nav.module.scss";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

export default function Navigation({}) {
  const {
    app_state: { device_width },
  } = useAppState();

  if (device_width && device_width >= 769) {
    return (
      <>
        <DesktopNavigation />
      </>
    );
  }
  if (device_width && device_width < 769) {
    return (
      <>
        <MobileNavigation />
      </>
    );
  }
  return null;
}

function DesktopNavigation() {
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
              src="/img/logos/logo-empty-bg.png"
              fill={true}
              alt="img"
            ></Image>
          </Link>
        </div>
      </div>
      <div className={`${styles.tabContainer}`}>
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
      <div className={`${styles.socialContainer}`}></div>
    </div>
  );
}

function MobileNavigation() {
  return (
    <div
      className={`grid grid-wrap padding-bottom_x-large padding-around_large font-size_medium size_1-of-1`}
      style={{ width: `100%` }}
    >
      <div className={`grid size_1-of-1`}>
        <div className="grid grid-align_vertical-center grid-align_horizontal-center size_1-of-1">
          <Link href="/">
            <Image
              src="/img/logos/RegalTrainingSolutionsLogo-04.png"
              width={201}
              height={53}
              alt="img"
            ></Image>
          </Link>
        </div>
      </div>
      <div
        className={`grid font-size_regular grid-align_vertical-center grid-align_horizontal-even size_1-of-1 padding-top_large`}
      >
        <Link href="/programs" className={`${styles.content}`}>
          Our Programs
        </Link>
        <Link href="/about" className={`${styles.content}`}>
          About
        </Link>
        <Link href="/contact" className={`${styles.content}`}>
          Contact Us
        </Link>
      </div>
    </div>
  );
}
