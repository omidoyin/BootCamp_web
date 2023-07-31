import "../styles/navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img5.jpg";
import { useState } from "react";

const NavBar = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <section className="bar">
        <section className="navBar">
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
                  navigate("/");
                }}
              >
                About Us
              </button>
              <button
                onClick={() => {
                  navigate("/");
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
                  navigate("/");
                  setToggle((prev) => !prev);
                }}
              >
                About Us
              </button>
              <button
                onClick={() => {
                  navigate("/");
                  setToggle((prev) => !prev);
                }}
              >
                Contact
              </button>
            </ul>
          </div>
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
        </section>
      </section>
    </>
  );
};

export default NavBar;
