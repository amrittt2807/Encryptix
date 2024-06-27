import Link from "next/link";
import { usePathname } from 'next/navigation';

const NavLink = ({ href, title }) => {
  const pathname = usePathname();
	const isActive = (path) => path === pathname;
  return (
    <Link
      href={href}
      className={isActive(href) ? 'block py-2 pl-3 pr-4 text-white sm:text-lg rounded md:p-0' : 'block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-lg rounded md:p-0 hover:text-white'}
    >
      {title}
    </Link>
  );
};

export default NavLink;
