const Footer = () => {
  return (
    <footer className="rounded-lg m-4 ">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://focuswider.com/" className="hover:underline">
            T-shirt store™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center gap-3 mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
