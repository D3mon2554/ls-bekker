import useAppState from "@modules/app-state";
import Link from "next/link";
import styles from "./footer.module.scss";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { FooterFootprintsGroup } from "../images/images";

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
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.containerContent}`}>
        <div className={`${styles.logoContainer}`}>
          <Image src="/img/logos/3d-logo.png" alt="Bekker-crest" fill />
        </div>
        <FooterFootprintsGroup color="#ffc82d" width={480} height={280} />
      </div>
      <div className={`${styles.containerText}`}>
        <div className={`${styles.infoContainer}`}>
          <div
            className={`${styles.links} padding-top_large padding-bottom_large`}
          >
            <h2 className="font-size_x-medium font-weight_bold">
              School Hours
            </h2>
            <p>08:00am - 15:00pm</p>
          </div>
          <div
            className={`${styles.links} padding-top_large padding-bottom_large`}
          >
            <h2 className="font-size_x-medium font-weight_bold">Telephone</h2>
            <p>014 577 1129</p>
          </div>
          <div
            className={`${styles.links} padding-top_large padding-bottom_large`}
          >
            <h2 className="font-size_x-medium font-weight_bold">Email</h2>
            <p>info@lsbekker.co.za</p>
          </div>
          <div
            className={`${styles.links} padding-top_large padding-bottom_large`}
          >
            <h2 className="font-size_x-medium font-weight_bold">Socials</h2>
            <div className="grid grid-align_horizontal-space padding-top_x-large padding-left_large padding-right_xxx-large">
              <div className={`${styles.socials}`}>
                <a href="https://facebook.com/lsbekker">
                  <Image src="/img/icons/facebook.png" alt="Facebook" fill />
                </a>
              </div>
              <div className={`${styles.socials}`}>
                <a href="https://www.instagram.com/laerskoolbekkerprimary">
                  <Image src="/img/icons/instagram.png" alt="Instagram" fill />
                </a>
              </div>
              <div className={`${styles.socials}`}>
                <a href="https://www.youtube.com/@laerskoolbekkerbekkerprima472">
                  <Image src="/img/icons/youtube.png" alt="Youtube" fill />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.linksContainer}`}>
          <div className={`${styles.link} font-size_x-medium font-weight_bold`}>
            <Link className={`${styles.links}`} href="/about/our-purpose">
              Our Purpose
            </Link>
          </div>
          <div className={`${styles.link} font-size_x-medium font-weight_bold`}>
            <Link className={`${styles.links}`} href="/about/our-school">
              Our School
            </Link>
          </div>
          <div className={`${styles.link} font-size_x-medium font-weight_bold`}>
            <Link className={`${styles.links}`} href="/about/our-pre-primary">
              Our Pre-primary
            </Link>
          </div>
          <div className={`${styles.link} font-size_x-medium font-weight_bold`}>
            <Link className={`${styles.links}`} href="/hostel/our-hostel">
              Our Hostel
            </Link>
          </div>
          <div className={`${styles.link} font-size_x-medium font-weight_bold`}>
            <Link className={`${styles.links}`} href="/calendar/upcoming">
              Events
            </Link>
          </div>
          <div className={`${styles.link} font-size_x-medium font-weight_bold`}>
            <Link className={`${styles.links}`} href="/registration/transport">
              Transport
            </Link>
          </div>
          <div
            className={`${styles.links} font-size_x-medium font-weight_bold`}
          >
            <Link
              className={`${styles.links}`}
              href="/registration/applications"
            >
              Applications
            </Link>
          </div>
          <div className={`${styles.link} font-size_x-medium font-weight_bold`}>
            <Link className={`${styles.links}`} href="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileFooter() {
  return (
    <div
      className={`grid grid-align_horizontal-center grid-wrap color-white ${styles.footer}`}
    ></div>
  );
}
