import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaMedium } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Abdur-Rehman-Rehan/" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/abdurrehmanrehan/",
  },
  { icon: <FaMedium />, path: "https://abdurrehmanrehan.medium.com/" },
  { icon: <FaTwitter />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
