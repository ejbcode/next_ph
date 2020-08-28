import SearchBox from "./ui/SearchBox";
import Nav from "./Nav";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <p> P </p>
          <SearchBox /> <Nav />
        </div>
        <div>
          <p>Hi: User</p>
          <button type="button">Sign out</button>
          <Link href="/">Login</Link>
          <Link href="/">Create an acount</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
