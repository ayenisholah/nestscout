import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./SideBar.scss";

export default function SideBar() {
  const [visible, setVisible] = useState(false);

  useEffect(function setupListener() {
    const closeSideBar = () => {
      if (visible) {
        setVisible(false);
      }
    };
    window.addEventListener("click", closeSideBar);

    return function cleanupListener() {
      window.removeEventListener("click", closeSideBar);
    };
  }, []);
  return (
    <Hamburger>
      <div className="menu-wrap" onClick={() => setVisible(!visible)}>
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div></div>
        </div>
        {visible && <div className="side-bar"></div>}
      </div>
    </Hamburger>
  );
}

const Hamburger = styled.div`
  .menu-wrap {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .menu-wrap .toggler {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    cursor: pointer;
    width: 50px;
    height: 50px;
    opacity: 0;
  }

  .menu-wrap .hamburger {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 60px;
    height: 60px;
    padding: 0;
    /* background: red; */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Hamburger Line */
  .menu-wrap .hamburger > div {
    position: relative;
    flex: none;
    width: 50%;
    height: 2px;
    background: #121117;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
  }

  /* Hamburger Lines - Top & Bottom */
  .menu-wrap .hamburger > div::before,
  .menu-wrap .hamburger > div::after {
    content: "";
    position: absolute;
    z-index: 1;
    top: -10px;
    width: 100%;
    height: 2px;
    background: inherit;
  }

  /* Moves Line Down */
  .menu-wrap .hamburger > div::after {
    top: 10px;
  }
`;
