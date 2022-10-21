import React from "react";
import styled from "styled-components";
import { cloud, map, goodie1, goodie2, goodie3 } from "../../assets";

function Decorations() {
  const Decorations = styled.div`
    position: absolute;
    z-index: -999;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
  `;
  const Clouds = styled.img`
    position: absolute;
    z-index: -800;
    animation: animateCloud 6s alternate infinite;
    @keyframes animateCloud {
      0% {
        right: 0;
      }
      100% {
        right: 5%;
      }
    }
  `;
  const Map = styled.img`
    position: absolute;
    z-index: -900;
    right: 0;
    top: 0;
    @media (max-width: 768px) {
      display: none;
    }
  `;
  const Goodie1 = styled.img`
    position: absolute;
    z-index: -850;
    right: 550px;
    bottom: 350px;
    @media (max-width: 768px) {
      display: none;
    }
  `;
  const Goodie2 = styled.img`
    position: absolute;
    z-index: -870;
    right: 370px;
    bottom: 150px;
    @media (max-width: 768px) {
      right: -15%;
    }
  `;
  const Goodie3 = styled.img`
    position: absolute;
    z-index: -870;
    top: 100px;
    left: 100px;
    @media (max-width: 768px) {
      top: 5%;
    }
  `;

  return (
    <Decorations>
      <Clouds src={cloud} alt="cloud" />
      <Map src={map} alt="map" />
      <Goodie1 src={goodie1} alt="goodie1" />
      <Goodie2 src={goodie2} alt="goodie2" />
      <Goodie3 src={goodie3} alt="goodie3" />
    </Decorations>
  );
}

export default Decorations;
