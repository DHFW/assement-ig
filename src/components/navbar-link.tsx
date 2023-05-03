import Link from "next/link";

interface NavBarLinkProps {
  href: string;
  text: string;
}

const NavBarLink: React.FC<NavBarLinkProps> = (props) => {
  return (
    <Link
      href={props.href}
      className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 cursor-pointer"
    >
      {props.text}
    </Link>
  );
};

export default NavBarLink;
