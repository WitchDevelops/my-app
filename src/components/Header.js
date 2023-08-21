import Logo from "./Logo.js";
import Turn from "./Turn.js";
import Reset from "./Reset.js";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <Logo />
      <Turn />
      <Reset />
    </div>
  );
}