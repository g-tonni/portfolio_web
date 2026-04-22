import nome from "../assets/nome-header.png";
import qualifiche from "../assets/qualifiche.png";

function Header() {
  return (
    <div className="w-full h-screen overflow-hidden relative">
      <img src={nome} alt="Nome" className="w-full" />
      <div className="flex w-max animate-infinite-scroll">
        <img
          src={qualifiche}
          alt="Appellativi"
          className="h-12 w-auto max-w-none"
        />
        <img
          src={qualifiche}
          alt="Appellativi"
          className="h-12 w-auto max-w-none"
        />
      </div>
    </div>
  );
}

export default Header;
