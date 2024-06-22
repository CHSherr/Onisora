import { Glory } from "next/font/google";

const glory = Glory({ weight: "400", style: "normal", subsets: ["latin"] });
const Navbar = () => {
  return (
    <nav
      className={
        glory.className +
        " text-lg text-black bg-transparent flex flex-row items-center justify-between"
      }
    >
      <div className="flex lg:flex-1 p-6">
        <img src="/next.svg" className="h-4 "></img>
      </div>

      <div className="flex lg:flex lg:gap-x-12">
        <a className={" p-6"} href="/about">
          About
        </a>
        <a className="font-openSans p-6" href="/socials">
          Socials
        </a>
        <a className="p-6" href="/lore">
          Lore
        </a>
      </div>
      <div className="flex lg:flex-1 lg:justify-end">
        <a href="/login" className="p-6">
          {" "}
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
