// >>>>   install npm i react-icons  <<<<
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const social = [
  {
    id: 0,
    url: "https://www.instagram.com/tech.drop_/",
    icon: <FaInstagram />,
  },
  {
    id: 1,
    url: "https://www.facebook.com/profile.php?id=61559475595437",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.linkedin.com/company/102567154/admin/feed/posts/",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: "https://x.com/Tech_Drop_",
    icon: <FaXTwitter />,
  },
];

function SocialButtons() {
  return (
    <ul>
      <li className="flex flex-col gap-[6px]">
        {social.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            className="h-[30px] w-[30px] rounded-[4px] text-[#3030FF] text-[16px] flex justify-center items-center"
          >
            {item.icon}
          </a>
        ))}
      </li>
    </ul>
  );
}

export default SocialButtons;
