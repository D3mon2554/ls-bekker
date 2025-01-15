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
    <>
      {/* Announcement Banner */}
      <div className={`${styles.bannerContainer}`}>
        <a href="/forms/hostel-application" className={`${styles.bannerLink}`}>
          Hostel applications now open for 2025
        </a>
      </div>
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
                <div
                  className={`${styles.dropdownContainer} ${styles.dropdown}`}
                >
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
                  <span className={`${styles.activePageIndicator}`}>
                    Hostel
                  </span>
                )}
              </label>
              {activeDropdown === "hostel" && (
                <div
                  className={`${styles.dropdownContainer} ${styles.dropdown}`}
                >
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
                    onClick={() =>
                      handlePageClick("hostel", "Hostel Newsletter")
                    }
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
                alt="logo"
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
                <div
                  className={`${styles.dropdownContainer} ${styles.dropdown}`}
                >
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
                <div
                  className={`${styles.dropdownContainer} ${styles.dropdown}`}
                >
                  <Link
                    className={`${styles.link}`}
                    href="/more/gallery"
                    onClick={() => handlePageClick("more", "Gallery")}
                  >
                    Gallery
                  </Link>
                  {/* <div className={`${styles.line}`} />
                <Link
                  className={`${styles.link}`}
                  href="/more/extra-information"
                  onClick={() => handlePageClick("more", "Download Hub")}
                >
                  Download Hub
                </Link> */}
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
    </>
  );
}

function MobileNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <div className={`${styles.bannerContainer}`}>
        <a href="/forms/hostel-application" className={`${styles.bannerLink}`}>
          Hostel applications now open for 2025
        </a>
      </div>
      <div className={`${styles.mobileContainer}`}>
        <div className={`${styles.mobileLogo}`}>
          <Link href="/">
            <Image
              src="/img/logos/Bekker-crest.png"
              width={80}
              height={80}
              alt="Logo"
            />
          </Link>
        </div>
        <div className={`${styles.burgerMenu}`} onClick={handleMenuToggle}>
          {/* Burger menu icon */}
          <div
            className={`${styles.mobileMenuButton}`}
            onClick={handleMenuToggle}
          >
            <Image src="/img/icons/Menu.ico" alt="Menu" fill />
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className={`${styles.mobileMenu}`}>
            {/* Close button */}
            <div className={`${styles.closeIcon}`} onClick={handleMenuToggle}>
              {/* Cross icon */}
              <img src="/img/icons/Close.ico" alt="Close" />
            </div>

            {/* Render all the links */}
            <div className={`${styles.mobileLinks}`}>
              {/* Modify this section to render all your links */}
              <Link
                onClick={handleMenuToggle}
                className={`${styles.mobileSingleLinks}`}
                href="/about/our-purpose"
              >
                Our Purpose
              </Link>
              <Link
                onClick={handleMenuToggle}
                className={`${styles.mobileSingleLinks}`}
                href="/about/our-school"
              >
                Our School
              </Link>
              <Link
                onClick={handleMenuToggle}
                className={`${styles.mobileSingleLinks}`}
                href="/about/our-pre-primary"
              >
                Our Pre-primary
              </Link>
              <Link
                onClick={handleMenuToggle}
                className={`${styles.mobileSingleLinks}`}
                href="/hostel/our-hostel"
              >
                Our Hostel
              </Link>
              <Link
                onClick={handleMenuToggle}
                className={`${styles.mobileSingleLinks}`}
                href="/hostel/newsletter"
              >
                Hostel Newsletter
              </Link>
              <Link
                onClick={handleMenuToggle}
                className={`${styles.mobileSingleLinks}`}
                href="/calendar/upcoming"
              >
                Upcoming Events
              </Link>
              <Link
                onClick={handleMenuToggle}
                className={`${styles.mobileSingleLinks}`}
                href="/calendar/general-newsletter"
              >
                School NewsLetter
              </Link>
              <Link
                onClick={handleMenuToggle}
                className={`${styles.mobileSingleLinks}`}
                href="/registration/transport"
              >
                Transport
              </Link>
              <Link
                onClick={handleMenuToggle}
                className={`${styles.mobileSingleLinks}`}
                href="/registration/applications"
              >
                Applications
              </Link>
              <Link
                onClick={handleMenuToggle}
                className={`${styles.mobileSingleLinks}`}
                href="/more/gallery"
              >
                Gallery
              </Link>
              <Link
                onClick={handleMenuToggle}
                className={`${styles.mobileSingleLinks}`}
                href="/contact"
              >
                Contact Us
              </Link>
              {/* Add more links as needed */}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
