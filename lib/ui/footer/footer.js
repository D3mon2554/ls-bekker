import useAppState from '@modules/app-state';
import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.scss';

export default function Footer() {
    const {
        app_state: { device_width }
    } = useAppState();

    if (device_width && device_width >= 768) {
        return (
            <>
                <DesktopFooter />
            </>
        );
    }
    if (device_width && device_width < 768) {
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
        <div className={`grid grid-align_horizontal-center grid-wrap color-white ${styles.footer}`}>
            <div className={` grid size_1-of-1 grid-align_horizontal-center padding-vertical_xx-large font-size_medium ${styles.nav}`}>
                <div className="padding-right_xxx-large">
                    <Link href="/" className={`${styles.home}`}>
                        Home
                    </Link>
                </div>
                <div className="padding-right_xxx-large">
                    <Link href="/programs" className={`${styles.home}`}>
                        Our Programs
                    </Link>
                </div>
                <div className="padding-right_xxx-large">
                    <Link href="/about" className={`${styles.home}`}>
                        About
                    </Link>
                </div>
                <div className="padding-right_xxx-large">
                    <Link href="/contact" className={`${styles.home}`}>
                        Contact Us
                    </Link>
                </div>
                {/* <div className='padding-right_xxx-large'>
                    <Link href="/signin" className={`${styles.home}`}>
                        Sign In
                    </Link>
                </div>
                <div>
                    <Link href="/signup" className={`${styles.home}`}>
                        Sign Up
                    </Link>
                </div> */}
            </div>
            <div className={`grid size_1-of-1 padding-horizontal_xxx-large font-size_regular padding-bottom_xxx-large grid grid-align_horizontal-start`}>
                <div className="size_1-of-4">
                    <Image src="/img/logos/RegalTrainingSolutionsLogo-04.png" alt="img" width={201} height={52.96}></Image>
                </div>
                <div className={`${styles.copys} padding-right_xxx-large size_2-of-4`}>
                    <p>
                        Popia Disclaimer:<br></br> The content displayed on this platform is the intellectual property of Regal Training Solutions (Pty) Ltd. You may not reuse, republish, or reprint such content without our written consent. While the information on this platform has been verified to the best of our abilities, we cannot guarantee that there are no errors or omissions. We reserve
                        the right to change and amend content at any time. It is your responsibility to ensure that you are up to date with the latest changes.
                    </p>
                </div>
                <div className="grid grid-align_vertical-end grid-align_horizontal-end size_1-of-4">
                    <div>Copyright © 2022 Your Learning Path</div>
                </div>
            </div>
        </div>
    );
}

function MobileFooter() {
    return (
        <div className={`grid grid-align_horizontal-center grid-wrap color-white ${styles.footer}`}>
            <div className={`font-size_small grid grid-vertical size_1-of-1 padding-around_xx-large grid grid-align_vertical-center`}>
                <div className="grid grid-align_vertical-center padding-bottom_xx-large grid-align_horizontal-center size_1-of-1">
                    <Image src="/img/logos/RegalTrainingSolutionsLogo-04.png" alt="img" width={201} height={52.96}></Image>
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
                <div className={`grid grid-align_vertical-center padding-bottom_large grid-align_horizontal-center size_1-of-1`}>
                    <div>
                        Popia Disclaimer:
                        <div>
                            The content displayed on this platform is the intellectual property of Regal Training Solutions (Pty) Ltd. You may not reuse, republish, or reprint such content without our written consent. While the information on this platform has been verified to the best of our abilities, we cannot guarantee that there are no errors or omissions. We reserve the right to change and
                            amend content at any time. It is your responsibility to ensure that you up to date with the latest changes.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
