import React from "react";
import { Footer, Social } from "./Footer.styled";
import { linkedin, twitter, facebook, pinterest } from "../../assets";
import FooterDecorations from "../FooterDecorations/FooterDecorations";

function FeedbackFooter() {
  const renderLinks = () => {
    const links = [
      { id: "linkedin", img: linkedin, href: "https://linkedin.com" },
      { id: "twitter", img: twitter, href: "https://twitter.com" },
      { id: "facebook", img: facebook, href: "https://facebook.com" },
      { id: "pinterest", img: pinterest, href: "https://pinterest.com" },
    ];

    return links.map((link) => (
      <Social
        href={link.href}
        target="_blank"
        rel="noreferrer noopener"
        key={link.id}
      >
        <img src={link.img} alt={link.id} />
      </Social>
    ));
  };
  return (
    <Footer>
      {renderLinks()}
      <FooterDecorations />
    </Footer>
  );
}

export default FeedbackFooter;
