import useNav from "../../hooks/useNav";
import MenuMobile from "./MenuMobile";
import texts from "../../utils/texts.json";
import logo from "../../../public/techDropLogo.png";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { BsXLg } from "react-icons/bs";
import useMediaQuery from "../../hooks/useMediaQuery";

const Navbar = () => {
  const { isOpen, handleIsOpen } = useNav();
  const isSmallScreen = useMediaQuery("(max-width: 640px)"); // Suponiendo 640px como el breakpoint para móviles

  return (
    <header
      className={` fixed z-[98] top-0 left-0 w-full  h-[78px] flex justify-center`}
      style={{ backgroundColor: "#FAFAFA" }}
    >
      <div className="flex justify-between items-center h-full w-full max-w-[1440px] px-4 ">
        <a
          href="/"
          className="font-bold flex items-center gap-4 pr-4"
          style={{ color: "#272727" }}
        >
          <img src={logo} alt="logo" width={250} />
        </a>

        {/* Renderizar elementos del menú solo si la vista no es móvil */}
        {!isSmallScreen && (
          <>
            <div>
              <a
                href={texts["section-one"].bloglink}
                target="_blank"
                rel="noopener noreferrer"
                className=""
                style={{ color: "#272727" }}
              >
                Blog
              </a>
            </div>
          </>
        )}

        {/* Renderizar botón de menú solo si la vista no es móvil */}
        <div className="ml-auto ">
          <button
            type="button"
            className="bg-[#4544EF] rounded-full py-2 px-5 text-white font-semibold"
          >
            <a
              href="https://techdrop.blog.niobe.work/"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2"
            >
              Contacto
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
