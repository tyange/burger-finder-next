const Header = () => {
  return (
    <header className="box-border p-5">
      <nav className="flex gap-16">
        <div>
          <span>햄버거 찾기</span>
        </div>
        <div>
          <ul className="flex gap-7">
            <li>credits</li>
            <li>login / join</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
