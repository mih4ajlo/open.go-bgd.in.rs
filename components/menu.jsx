"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // for route change detection
import classes from "./header.module.css";

export default function Menu() {
  const [clicked, setClicked] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname(); // gets the current path

  // Close menu on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setClicked(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setClicked(false);
  }, [pathname]);

  return (
    <header className={classes.header}>
      <a href="/" className={classes.logo}>
        BG Open
      </a>
      <div ref={menuRef}>
        <input
          className={classes.menuBtn}
          type="checkbox"
          id="menuBtn"
          checked={clicked}
          onChange={() => setClicked((prev) => !prev)}
        />
        <label className={classes.menuIcon} htmlFor="menuBtn">
          <span className={classes.navicon}></span>
        </label>
        <ul className={classes.menu} style={{ display: clicked ? "block" : "none" }}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/register">Registration</Link>
          </li>
          <li>
            <Link href="/participants">Participants</Link>
          </li>
          <li>
            <Link href="/rules">Rules</Link>
          </li>
          <li>
            <Link href="/details">Other info</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
