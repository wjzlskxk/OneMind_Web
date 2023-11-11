import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPen } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../../style/BrowserMap.css";
const BrowserMap = () => {
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
  const [isWrite, setIsWrite] = useState(false);

  const handlePopUpContryList = () => {
    setIsPop((prevIsPop) => !prevIsPop);
  };

  const handleWritePopUp = () => {
    setIsWrite((prevIsWrite) => !prevIsWrite);
  };
  const TranslateLanguage = (event) => {
    const SelectLanguage = event.target.id;

    let language;
    switch (SelectLanguage) {
      case "ctr1":
        language = "중국어";
        break;
      case "ctr2":
        language = "일본어";
        break;
      case "ctr3":
        language = "힌디어";
        break;
      case "ctr4":
        language = "영어";
        break;
      case "ctr5":
        language = "중국어(대만)";
        break;
      case "ctr6":
        language = "베트남어";
        break;
      case "ctr7":
        language = "영어(싱가포르)";
        break;
      case "ctr8":
        language = "중국어(홍콩)";
        break;
      default:
        language = "알 수 없음";
    }

    if (language === "중국어") {
      alert("您确定要更改为中文吗？");
    } else if (language === "일본어") {
      alert("本当に日本語に変えますか？");
    } else if (language === "힌디어") {
      alert("क्या आप वाकई इसे हिंदी में बदलना चाहते हैं?");
    } else if (language === "영어") {
      alert("Are you sure you want to change to English?");
    } else if (language === "중국어(대만)") {
      alert("您确定要更改为中文吗？");
    } else if (language === "영어(싱가포르)") {
      alert("Are you sure you want to change to English?");
    } else if (language === "중국어(홍콩)") {
      alert("您确定要更改为中文吗？");
    }
  };

  return (
    <div className="BrowserMap">
      <div className="SearchWrap">
        <div className="SearchNav">
          <h1>Going</h1>
          <input className="SearchPlace" />
        </div>
        <div className="MoneyWrap">
          <div className="MoneyTitle">환율 정보</div>
          <div className="productName">Coke</div>
          <div className="MyCountryMoney">Japan: ¥ 230</div>
          <div className="KoreaMoney">Korea: ₩ 2,000</div>
        </div>
      </div>
      <Map
        id="map"
        center={state.center}
        style={{ width: "74%", height: "60vw", marginLeft: "28%" }}
        level={3}
        onClick={handleMapClick}
      >
        {!state.isLoading && <MapMarker position={state.center} />}
        {isVisible &&
          markers.map((markers, index) => (
            <MapMarker key={`${markers.position}-${index}`} position={markers.position} />
          ))}
        <div className="ScheduleMenuWrap" style={{ position: "absolute" }}>
          <div className="ScheduleMenu">
            <FontAwesomeIcon icon={faChevronDown} className="menu" color="#fff" onClick={handlePopUpContryList} />
            {isPop && (
              <div className="PopUpList">
                <div className="CountryListWrap">
                  <div className="CountryWrap">
                    <div className="country">
                      <p id="ctr1" onClick={TranslateLanguage}>
                        China
                      </p>
                    </div>
                    <div className="country">
                      <p id="ctr2" onClick={TranslateLanguage}>
                        Japan
                      </p>
                    </div>
                    <div className="country">
                      <p id="ctr3" onClick={TranslateLanguage}>
                        India
                      </p>
                    </div>
                    <div className="country">
                      <p id="ctr4" onClick={TranslateLanguage}>
                        U.S.
                      </p>
                    </div>
                    <div className="country">
                      <p id="ctr5" onClick={TranslateLanguage}>
                        Taiwan
                      </p>
                    </div>
                    <div className="country">
                      <p id="ctr6" onClick={TranslateLanguage}>
                        Vietnam
                      </p>
                    </div>
                    <div className="country">
                      <p id="ctr7" onClick={TranslateLanguage}>
                        Singapore
                      </p>
                    </div>
                    <div className="country">
                      <p id="ctr8" onClick={TranslateLanguage}>
                        Hong Kong
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="WritenButtonWrap" style={{ position: "absolute" }}>
          <FontAwesomeIcon icon={faPen} className="writeIcon" onClick={handleWritePopUp} />
          {isWrite && (
            <div className="WritenWrap">
              <div className="WritenContentWrap">
                <div className="WritenTitle">
                  <input type="text" className="titleInput" />
                </div>
                <div className="WritenContent">
                  <input type="text" className="contentInput" />
                </div>
              </div>
            </div>
          )}
        </div>
      </Map>
    </div>
  );
};

export default BrowserMap;
