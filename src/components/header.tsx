import NavBarLink from "./navbar-link";
import WhishList from "./whishlist";

const Header = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-slate-900 px-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            T-shirt store
          </span>
        </a>

        <div className="w-full flex gap-6 md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavBarLink href="/" text="Home"></NavBarLink>
            </li>
            <li>
              <NavBarLink href="/products" text="Products"></NavBarLink>
            </li>
          </ul>
          <div className="dark:text-slate-100">
            <WhishList />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
