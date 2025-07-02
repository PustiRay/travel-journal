import globeLogo from "../assets/globe.svg";

export default function Navbar() {
  return (
    <nav className="nav">
      <img className="nav--logo" src={globeLogo} alt="globe" />
      <h1 className="nav--title">my travel journal.</h1>
    </nav>
  );
}
