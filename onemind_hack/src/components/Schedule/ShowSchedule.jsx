import "../../style/ShowSchedule.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const ShowSchedule = () => {
  const MainTo = () => {
    window.location.replace("/");
  };
  return (
    <>
      <div className="ShowScheduleWrap">
        <FontAwesomeIcon icon={faArrowLeft} className="back" onClick={MainTo} />
        <div className="ShowScheduleContentWrap">
          <div className="ShowScheduleTitle">23년 11월 9일</div>
          <div className="ShowScheduleWrite">2.28공원 → 동성로 구경</div>
        </div>
      </div>
    </>
  );
};

export default ShowSchedule;
