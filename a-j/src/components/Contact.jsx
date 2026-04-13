import instagramIcon from "../assets/images/contact/instagram-icon.png";
import linkedinIcon from "../assets/images/contact/linkedin-icon.png";
import mailIcon from "../assets/images/contact/mail-icon.png";

export default function Footer() {
    return (
        <div
            className="contact-links">


            <a href="https://www.linkedin.com/in/amjad-janjoun-6151a128a/">
                <img
                    src={linkedinIcon}
                    alt={"LinkedIn Link"}
                    className="canal-icon">
                </img>
            </a>


            <a href="mailto:amjadjanjoun5@gmail.com">
                <img
                    src={mailIcon}
                    alt={"Mailing Link"}
                    className="canal-icon">
                </img>
            </a>

            <a href="https://www.instagram.com/amjadjanjoun">
                <img
                    src={instagramIcon}
                    alt={"Instagram Link"}
                    className="canal-icon">
                </img>
            </a>

        </div>
    )
}