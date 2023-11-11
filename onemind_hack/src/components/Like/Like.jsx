import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../style/Like.css";
const Like = () => {
  const LoadToMain = () => {
    window.location.replace("/");
  };
  return (
    <div className="LikeWrap">
      <div className="PageTitle">
        <FontAwesomeIcon icon={faArrowLeft} className="back" onClick={LoadToMain} />
        <h1 className="title">찜하기</h1>
      </div>
      <div className="LikeListWrap">
        <div className="LikeList">대구 - 2.28 국채보상기념운동관</div>
        <div className="LikeList">서울 - 63빌딩</div>
        <div className="LikeList">안동 - 하회마을</div>
        <div className="LikeList">전주 - 한옥마을</div>
        <div className="LikeList">부산 - 광안리</div>
        <div className="LikeList">경주 - 황리단길</div>
      </div>
    </div>
  );
};

export default Like;
