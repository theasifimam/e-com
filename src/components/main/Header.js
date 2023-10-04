"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();

  // const isActive = pathName === href;
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <div className="logo-img">
            <Image src="/asset-img/logo.png" width="60" height="60" />
          </div>
          <span>Logo</span>
        </div>

        <ul className="navlinks">
          <li>
            <Link
              href="/"
              className={pathName === "/" ? "active navlink" : "navlink"}
            >
              <span>Catogories</span>
              <i class="fa-solid fa-chevron-down"></i>
            </Link>
          </li>
          <li>
            <Link
              href="/deals"
              className={pathName === "/deals" ? "active navlink" : "navlink"}
            >
              <span>Deals</span>
            </Link>
          </li>
          <li>
            <Link
              href="/whats-new"
              className={
                pathName === "/whats-new" ? "active navlink" : "navlink"
              }
            >
              <span>What's New</span>
            </Link>
          </li>
          <li>
            <Link
              href="/delivery"
              className={
                pathName === "/delivery" ? "active navlink" : "navlink"
              }
            >
              <span>Delivery</span>
            </Link>
          </li>
        </ul>

        <div className="right controls">
          <div className="search">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search Products"
            />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>

          <div className="user">
            <i class="fa-regular fa-user"></i>
            <span>Account</span>
          </div>

          <div className="cart">
            <i class="fa-brands fa-opencart"></i>
            <span>Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
