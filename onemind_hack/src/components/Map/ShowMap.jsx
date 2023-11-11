import { useEffect, useState } from "react";
import { isBrowser, isMobile } from "react-device-detect";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import BrowserMap from "./BrowerMap";

const ShowMap = () => {
  {
    isBrowser && <BrowserMap />;
  }
  // {
  //   isMobile && (
  //     <MoblieMap />
  //   )
  // }
};

export default ShowMap;
