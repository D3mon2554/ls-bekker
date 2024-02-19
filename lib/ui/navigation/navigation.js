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
      <div className={`${styles.navLeft}`}>
        <div className={`${styles.tabContainer}`}>
          <Link
            href="/about"
            className={`${styles.content} ${
              isLinkActive("/about") ? styles.active : ""
            }`}
          >
            About Us
          </Link>

          {/* School Dropdown */}
          <Link
            href="/school/about-school"
            className={`${styles.content} ${
              isLinkActive("/school/about-school") ? styles.active : ""
            }`}
          >
            School
          </Link>

          {/* Hostel Dropdown */}
          <Link
            href="/hostel/about-hostel"
            className={`${styles.content} ${
              isLinkActive("/hostel/about-hostel") ? styles.active : ""
            }`}
          >
            Hostel
          </Link>

          <Link
            href="/more/fees"
            className={`${styles.content} ${
              isLinkActive("/more/fees") ? styles.active : ""
            }`}
          >
            Fees
          </Link>
        </div>
      </div>
      <div className={`${styles.logoContainer}`}>
        <div className={`${styles.logo}`}>
          <Link href="/">
            <Image
              className={`${styles.image}`}
              src="/img/logos/crest-transparent .png"
              fill={true}
              alt="img"
            ></Image>
          </Link>
        </div>
      </div>
      <div className={`${styles.navRight}`}>
        <div className={`${styles.tabContainer}`}>
          <Link
            href="/registration/transport"
            className={`${styles.content} ${
              isLinkActive("/registration/transport") ? styles.active : ""
            }`}
          >
            Transport
          </Link>

          {/* Applications*/}
          <Link
            href="/registration/applications"
            className={`${styles.content} ${
              isLinkActive("/registration/applications") ? styles.active : ""
            }`}
          >
            Applications
          </Link>

          {/* Calendar */}
          <Link
            href="/more/upcoming"
            className={`${styles.content} ${
              isLinkActive("/more/upcoming") ? styles.active : ""
            }`}
          >
            Calendar
          </Link>

          <div className={`${styles.contact}`}>
            <Link
              href="/contact"
              className={`${styles.contacts} ${
                isLinkActive("/contact") ? styles.active : ""
              }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileNavigation() {
  // ... (your existing code)

  // State to manage mobile menu visibility
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };
  return (
    <>
      <div className={`${styles.mobileContainer} `}>
        {/* Logo on the left */}
        <div className={`${styles.mobileLogoContainer}`}>
          <div className={`${styles.mobileLogo}`}>
            <Link href="/">
              <Image
                src="/img/logos/logo-empty-bg.png"
                fill={true}
                alt="img"
              ></Image>
            </Link>
          </div>
        </div>

        {/* Mobile menu button on the right */}
        <div
          className={`${styles.mobileMenuButton}`}
          onClick={toggleMobileMenu}
        >
          ☰ {/* You can use a hamburger icon here */}
        </div>

        {/* Mobile menu on the right */}
        {mobileMenuVisible && (
          <div className={`${styles.mobileMenu}`}>
            {/* Your navigation links for mobile */}
            {/* Consider using a list for better styling and accessibility */}
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About us</Link>
              </li>
              {/* Add other mobile navigation links here */}
            </ul>
          </div>
        )}

        {/* Your existing navigation tabs (on the left) */}
        <div className={`${styles.mobileTabContainer}`}>
          {/* Your existing navigation code */}
        </div>

        {/* Your existing social container */}
        <div className={`${styles.mobileocialContainer}`}></div>
      </div>
    </>
  );
}
