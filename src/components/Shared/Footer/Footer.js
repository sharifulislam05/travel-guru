import React from "react";
import "./footer.css";
import FooterCol from "./FooterCol";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const community = [
    { name: "Community", link: "/Community" },
    { name: "Blogs", link: "/Community" },
    { name: "Forms", link: "/Community" },
    { name: "Meetups", link: "/Community" },
  ];
  const ourAddress = [
    { name: "New York - 101010 Hudson", link: "//google.com/map" },
    { name: "Yards", link: "//google.com/map" },
  ];
  const news = [
    { name: "GoTravel", link: "/link" },
    { name: "GoTravel", link: "/link" },
    { name: "GoTrave", link: "/link" },
    { name: "GoTrave", link: "/link" },
  ];
  const services = [
    { name: "Terms", link: "/link" },
    { name: "Licenses", link: "/link" },
    { name: "Market API", link: "/link" },
    { name: "Become an affiliate", link: "/link" },
  ];
  
  return (
    <footer className="footer-container">
      <div className="container">
        <div className="row pt-5">
          <FooterCol menuTitle="Community" menuList={community}></FooterCol>
          <FooterCol menuTitle="News" menuList={news}></FooterCol>
          <FooterCol menuTitle="Services" menuList={services}></FooterCol>
          <FooterCol menuTitle="Our Address" menuList={ourAddress}>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="//facebook.com">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//google.com">
                  <FontAwesomeIcon icon={faGooglePlusG} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//instagram.com">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
            <div className="mt-5 text-secondary">
              <h6>Call now</h6>
              <button className="btn btn-primary">+2025550295</button>
            </div>
          </FooterCol>
          <div className="text-center w-100 pt-5">
            <p>Copyright {new Date().getFullYear()} || All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
