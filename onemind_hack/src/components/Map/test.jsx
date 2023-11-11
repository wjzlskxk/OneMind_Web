import React, { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const Test = () => {
  const [markers, setMarkers] = useState([
    {
      position: {
        lat: 37.5665,
        lng: 126.978,
      },
      address: "",
    },
    // 필요에 따라 더 많은 마커를 추가하세요
  ]);

  const [center, setCenter] = useState({
    lat: 37.5665,
    lng: 126.978,
  });

  useEffect(() => {
    // 카카오 맵의 지오코더 서비스를 사용하여 각 마커의 주소를 가져옵니다
    const geocoder = new window.kakao.maps.services.Geocoder();

    const updateMarkerAddress = async () => {
      const updatedMarkers = await Promise.all(
        markers.map(async (marker) => {
          const { lat, lng } = marker.position;
          return new Promise((resolve) => {
            geocoder.coord2Address(lng, lat, (result, status) => {
              if (status === window.kakao.maps.services.Status.OK) {
                const address = result[0]?.address?.address_name || "주소를 찾을 수 없습니다";
                resolve({ ...marker, address });
              } else {
                resolve({ ...marker, address: "주소를 찾을 수 없습니다" });
              }
            });
          });
        }),
      );

      setMarkers(updatedMarkers);
    };

    updateMarkerAddress();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleMapClick = (target, mouseEvent) => {
    const newMarker = {
      position: {
        lat: mouseEvent.latLng.getLat(),
        lng: mouseEvent.latLng.getLng(),
      },
      address: "로딩 중...", // 실제 주소를 가져올 때까지의 임시 주소
    };

    setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
  };

  return (
    <Map center={center} style={{ width: "100%", height: "500px" }} level={3} onClick={handleMapClick}>
      {markers.map((marker, index) => (
        <MapMarker key={index} position={marker.position} title={marker.address} />
      ))}
    </Map>
  );
};

export default Test;
