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
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activePages, setActivePages] = useState({});

  const handleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const handlePageClick = (dropdown, linkText) => {
    setActivePages((prevPages) => ({
      ...prevPages,
      [dropdown]: linkText,
    }));
    setActiveDropdown(dropdown); // Set the active dropdown
    closeDropdowns();

    // Reset active pages for other tabs
    Object.keys(activePages).forEach((tab) => {
      if (tab !== dropdown) {
        setActivePages((prevPages) => ({
          ...prevPages,
          [tab]: "",
        }));
      }
    });
  };
  useEffect(() => {
    const handleOutsideClick = (e) => {
      const isOutsideDropdown = !e.target.closest(
        `.${styles.dropdownContainer}`
      );
      if (isOutsideDropdown) {
        closeDropdowns();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.navLeft}`}>
        <div className={`${styles.tabContainer}`}>
          {/* About Tab */}
          <div
            onClick={() => handleDropdown("about")}
            className={`${styles.tab} ${
              activeDropdown === "about" ? styles.activeTab : ""
            }`}
          >
            <label className={`${styles.label}`}>
              {activePages["about"] ? (
                <div className={`${styles.activePageIndicator}`}>
                  {activePages["about"]}
                </div>
              ) : (
                <span className={`${styles.activePageIndicator}`}>About</span>
              )}
            </label>
            {activeDropdown === "about" && (
              <div className={`${styles.dropdownContainer} ${styles.dropdown}`}>
                <Link
                  className={`${styles.link}`}
                  href="/about/our-purpose"
                  onClick={() => handlePageClick("about", "Our Purpose")}
                >
                  Our Purpose
                </Link>
                <div className={`${styles.line}`} />
                <Link
                  className={`${styles.link}`}
                  href="/about/our-school"
                  onClick={() => handlePageClick("about", "Our School")}
                >
                  Our School
                </Link>
                <div className={`${styles.line}`} />
                <Link
                  className={`${styles.link}`}
                  href="/about/our-pre-primary"
                  onClick={() => handlePageClick("about", "Our Pre-primary")}
                >
                  Our Pre-primary
                </Link>
              </div>
            )}
          </div>

          {/* Hostel Tab */}
          <div
            onClick={() => handleDropdown("hostel")}
            className={`${styles.tab} ${
              activeDropdown === "hostel" ? styles.activeTab : ""
            }`}
          >
            <label className={`${styles.label}`}>
              {activePages["hostel"] ? (
                <div className={`${styles.activePageIndicator}`}>
                  {activePages["hostel"]}
                </div>
              ) : (
                <span className={`${styles.activePageIndicator}`}>Hostel</span>
              )}
            </label>
            {activeDropdown === "hostel" && (
              <div className={`${styles.dropdownContainer} ${styles.dropdown}`}>
                <Link
                  className={`${styles.link}`}
                  href="/hostel/our-hostel"
                  onClick={() => handlePageClick("hostel", "Our Hostel")}
                >
                  Our Hostel
                </Link>
                <div className={`${styles.line}`} />
                <Link
                  className={`${styles.link}`}
                  href="/hostel/newsletter"
                  onClick={() => handlePageClick("hostel", "Hostel Newsletter")}
                >
                  Hostel Newsletter
                </Link>
              </div>
            )}
          </div>

          {/* Calendar Tab */}
          <div
            onClick={() => handleDropdown("calendar")}
            className={`${styles.tab} ${
              activeDropdown === "calendar" ? styles.activeTab : ""
            }`}
          >
            <label className={`${styles.label}`}>
              {activePages["calendar"] ? (
                <div className={`${styles.activePageIndicator}`}>
                  {activePages["calendar"]}
                </div>
              ) : (
                <span className={`${styles.activePageIndicator}`}>
                  Calendar
                </span>
              )}
            </label>
            {activeDropdown === "calendar" && (
              <div
                className={`${styles.dropdownContainer} ${styles.dropdown} grid grid-wrap`}
              >
                <Link
                  className={`${styles.link}`}
                  href="/calendar/upcoming"
                  onClick={() => handlePageClick("calendar", "Events")}
                >
                  Events
                </Link>
                <div className={`${styles.line}`} />
                <Link
                  className={`${styles.link}`}
                  href="/calendar/general-newsletter"
                  onClick={() => handlePageClick("calendar", "Newsletter")}
                >
                  Newsletter
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Logo */}
      <div className={`${styles.logoContainer}`}>
        <div className={`${styles.logo}`}>
          <Link href="/" onClick={() => handlePageClick("", "")}>
            <Image
              className={`${styles.image}`}
              src="/img/logos/crest-transparent.png"
              fill={true}
              alt="img"
            ></Image>
          </Link>
        </div>
      </div>
      {/* Nave right */}
      <div className={`${styles.navRight}`}>
        <div className={`${styles.tabContainer}`}>
          {/* Registration Tab */}
          <div
            onClick={() => handleDropdown("registration")}
            className={`${styles.tab} ${
              activeDropdown === "registration" ? styles.activeTab : ""
            }`}
          >
            <label className={`${styles.label}`}>
              {activePages["registration"] ? (
                <div className={`${styles.activePageIndicator}`}>
                  {activePages["registration"]}
                </div>
              ) : (
                <span className={`${styles.activePageIndicator}`}>
                  Registration
                </span>
              )}
            </label>
            {activeDropdown === "registration" && (
              <div className={`${styles.dropdownContainer} ${styles.dropdown}`}>
                <Link
                  className={`${styles.link}`}
                  href="/registration/transport"
                  onClick={() => handlePageClick("registration", "Transport")}
                >
                  Transport
                </Link>
                <div className={`${styles.line}`} />
                <Link
                  className={`${styles.link}`}
                  href="/registration/applications"
                  onClick={() =>
                    handlePageClick("registration", "Applications")
                  }
                >
                  Applications
                </Link>
              </div>
            )}
          </div>

          {/* More Tab */}
          <div
            onClick={() => handleDropdown("more")}
            className={`${styles.tab} ${
              activeDropdown === "more" ? styles.activeTab : ""
            }`}
          >
            <label className={`${styles.label}`}>
              {activePages["more"] ? (
                <div className={`${styles.activePageIndicator}`}>
                  {activePages["more"]}
                </div>
              ) : (
                <span className={`${styles.activePageIndicator}`}>More</span>
              )}
            </label>
            {activeDropdown === "more" && (
              <div className={`${styles.dropdownContainer} ${styles.dropdown}`}>
                <Link
                  className={`${styles.link}`}
                  href="/more/gallery"
                  onClick={() => handlePageClick("more", "Gallery")}
                >
                  Gallery
                </Link>
                <div className={`${styles.line}`} />
                <Link
                  className={`${styles.link}`}
                  href="/more/extra-information"
                  onClick={() => handlePageClick("more", "Download Hub")}
                >
                  Download Hub
                </Link>
              </div>
            )}
          </div>

          {/* Contact Us Tab */}
          <div className={`${styles.contact}`}>
            <Link
              href="/contact"
              className={`${styles.contacts} `}
              onClick={() => handlePageClick("", "")}
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
