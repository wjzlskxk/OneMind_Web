import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faCalendarPlus, faEllipsis, faHeart } from "@fortawesome/free-solid-svg-icons";
import PlaceImage from "../../img/PlaceImage.jpeg";
import "../../style/MobileMap.css";

const MobileMap = () => {
  const [markers, setMarkers] = useState([
    {
      position: {
        lat: 33.450701,
        lng: 126.570667,
      },
    },
  ]);

  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        },
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }));
    }
  }, []);

  const handleMapClick = (_target, mouseEvent) => {
    if (markers.length < 5) {
      setMarkers((prevMarkers) => [
        ...prevMarkers,
        {
          position: {
            lat: mouseEvent.latLng.getLat(),
            lng: mouseEvent.latLng.getLng(),
          },
        },
      ]);
    }
  };

  const [isVisible, setIsVisible] = useState(true);
  const [isPop, setIsPop] = useState(false);

  const handlePopUpMenuList = () => {
    setIsPop((prevIsPop) => !prevIsPop);
  };

  const [isMarkerClick, setIsMarkerClick] = useState(false);
  const handlePopUpPlaceInfo = () => {
    setIsMarkerClick((prevIsMarkerClick) => !prevIsMarkerClick);
  };

  const Back = () => {
    setIsMarkerClick(false);
  };

  const LoadToLike = () => {
    window.location.replace("/like");
  };

  const LoadToAddSchedule = () => {
    window.location.replace("/schedule/add");
  };

  const LoadToCheckSchedule = () => {
    window.location.replace("/schedule/check");
  };
  return (
    <div className="MobileWrap">
      <Map
        id="map"
        center={state.center}
        style={{ width: "100%", height: "230vw" }}
        level={3}
        onClick={handleMapClick}
        draggable={true}
      >
        {!state.isLoading && <MapMarker position={state.center} />}
        {isVisible &&
          markers.map((markers, index) => (
            <MapMarker
              key={`${markers.position}-${index}`}
              position={markers.position}
              onClick={handlePopUpPlaceInfo}
            />
          ))}
        {isMarkerClick && (
          <div className="PlaceInfoWrap" style={{ position: "absolute" }}>
            <div className="PlaceImageWrap">
              <img src={PlaceImage} className="PlaceImage" />
            </div>
            <div className="PlaceAdress">경기도 고양시 일산서구 대화로 315</div>
            <div className="PlaceContentWrap">
              <div className="PlaceName">
                <p>고양 생태공원</p>
              </div>
              <div className="PlaceContent">
                <div>
                  고양생태공원은 고양시 최초로 생태교육을 위해 조성한 공원으로, 도심 속에 버려진 나대지를 생물에게는
                  안정적이고 다양한 서식처를 제공하고 사람들은 자연 속에서 살아가는 생물들을 쉽게 관찰할 수 있는
                  공간으로 조성하였다. 또한, 고양생태교육센 터는 시민들로부터 불필요한 수목을 기증받고 공사장이나 하천의
                  지장목ㆍ폐목 등을 생태공원 조성에 활용하여 절감한 예산으로 건축하였다.
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="MobileSearchWrap" style={{ position: "absolute" }} id="menu_wrap">
          <input
            className={isMarkerClick ? "hide" : "MobileSearchPlace"}
            id="keyword"
            placeholder="Where are you want going to?"
          />
        </div>
        <div className="MenuListWrap" style={{ position: "absolute" }}>
          <div className="MenuList">
            <FontAwesomeIcon icon={faEllipsis} className="menu" color="#fff" onClick={handlePopUpMenuList} />
            {isPop && (
              <div className="PopUpList">
                <div className="MenuWrap">
                  <div className="Menu first">
                    <FontAwesomeIcon icon={faCalendarCheck} className="MenuIcon" onClick={LoadToCheckSchedule} />
                  </div>
                  <div className="Menu second">
                    <FontAwesomeIcon icon={faCalendarPlus} className="MenuIcon" onClick={LoadToAddSchedule} />
                  </div>
                  <div className="Menu">
                    <FontAwesomeIcon icon={faHeart} className="MenuIcon" onClick={LoadToLike} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Map>
    </div>
  );
};

export default MobileMap;
