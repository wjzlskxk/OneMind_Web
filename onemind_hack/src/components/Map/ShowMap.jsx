import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
const ShowMap = () => {
  const [markers, setMarkers] = useState([
    {
      position: {
        lat: 33.450701,
        lng: 126.570667,
      },
    },
  ]);

  const [isVisible, setIsVisible] = useState(true);
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoding: true,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            isLoding: false,
          }));
        },
        (error) => {
          setState((prev) => ({
            ...prev,
            errMsg: "geolocation을 사용할 수 없어요... ㅠㅠ",
            isLoding: false,
          }));
        },
      );
    }
  }, []);

  return (
    <>
      <Map
        center={state.center}
        style={{
          // 지도의 크기
          width: "100%",
          height: "450px",
        }}
        level={3} // 지도의 확대 레벨
        onClick={(_target, mouseEvent) => {
          setMarkers([
            ...markers,
            {
              position: {
                lat: mouseEvent.latLng.getLat(),
                lng: mouseEvent.latLng.getLng(),
              },
            },
          ]);
        }}
      >
        {isVisible &&
          markers.map((marker, index) => (
            <MapMarker
              key={`${marker.position}-${index}`}
              position={marker.position} // 마커를 표시할 위치
              
            />
          ))}
        {!state.isLoding && <MapMarker position={state.center}></MapMarker>}
      </Map>
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        {/* <button onClick={() => setIsVisible(false)}>마커 감추기</button>
        <button onClick={() => setIsVisible(true)}>마커 보이기</button> */}
      </div>
    </>
  );
};

export default ShowMap;
