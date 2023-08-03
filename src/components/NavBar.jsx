import "../styles/navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img5.jpg";
import { useState } from "react";

const NavBar = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <section className="bar">
        <section className="navBar">
          <div>
            {toggle ? (
              <MdOutlineCancel
                className="menu-icon"
                onClick={() => {
                  setToggle((prev) => !prev);
                }}
              />
            ) : (
              <AiOutlineMenu
                className="menu-icon"
                onClick={() => {
                  setToggle((prev) => !prev);
                }}
              />
            )}
          </div>

          <div>
            <ul className="menu-list">
              <button
                onClick={() => {
                  navigate("/");
                }}
              >
                home
              </button>
              <button
                onClick={() => {
                  navigate("/about");
                }}
              >
                About
              </button>
              <button
                onClick={() => {
                  navigate("/contact");
                }}
              >
                Contact
              </button>
            </ul>
            <ul className={toggle ? "menu-list-small" : "menu-list-small-off"}>
              <button
                onClick={() => {
                  navigate("/");
                  setToggle((prev) => !prev);
                }}
              >
                home
              </button>
              <button
                onClick={() => {
                  navigate("/about");
                  setToggle((prev) => !prev);
                }}
              >
                About Us
              </button>
              <button
                onClick={() => {
                  navigate("/contact");
                  setToggle((prev) => !prev);
                }}
              >
                Contact
              </button>
            </ul>
          </div>
          <div className="logo">
            <img
              src={logo}
              alt=""
              className="logo"
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default NavBar;
