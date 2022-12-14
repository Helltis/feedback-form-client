import React from "react";
import { goodie2, goodie3, goodie4 } from "../../assets";
import styled from "styled-components";

function FooterDecorations() {
  const FootGoodie2 = styled.img`
    position: absolute;
    left: 3%;
    bottom: -40%;
    @media (max-width: 768px) {
      display: none;
    }
  `;

  const FootGoodie3 = styled.img`
    position: absolute;
    right: -2%;
    @media (max-width: 768px) {
      display: none;
    }
  `;

  const FootGoodie4 = styled.img`
    position: absolute;
    right: 15%;
    top: 0;
    @media (max-width: 768px) {
      transform: rotate(180deg);
      bottom: 0;
      top: auto;
    }
  `;
  return (
    <>
      <FootGoodie2 src={goodie2} alt="footerGoodie2" />
      <FootGoodie3 src={goodie3} alt="footerGoodie3" />
      <FootGoodie4 src={goodie4} alt="footerGoodie4" />
    </>
  );
}

export default FooterDecorations;
