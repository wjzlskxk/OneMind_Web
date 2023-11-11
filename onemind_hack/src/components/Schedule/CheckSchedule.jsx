import "../../style/CheckSchedule.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
const CheckSchedule = () => {
  const EditGo = () => {
    window.location.replace("/schedule/edit");
  };
  const MainGo = () => {
    window.location.replace("/");
  };

  const ShowGo = () => {
    window.location.replace("/schedule/show");
  };
  return (
    <div className="CheckScheduleWrap">
      <FontAwesomeIcon icon={faArrowLeft} style={{ width: "7vw", height: "7vw" }} className="back" onClick={MainGo} />
      <div className="schedules">
        <div className="schedule" onClick={ShowGo}>
          <div className="scheduleTitle">23년 11월 9일</div>
          <div className="scheduleContent">
            <div className="InputContent">2.28 공원 → 동성로 구경</div>
          </div>
          <div className="Edit">
            <FontAwesomeIcon icon={faPenToSquare} className="editIcon" onClick={EditGo} />
          </div>
        </div>
        <div className="schedule">
          <div className="scheduleTitle">23년 11월 10일</div>
          <div className="scheduleContent">
            <div className="InputContent">김광석 다시 그리기 길 → VIPS</div>
          </div>
          <div className="Edit2">
            <FontAwesomeIcon icon={faPenToSquare} className="editIcon2" onClick={EditGo} />
          </div>
        </div>
        <div className="schedule">
          <div className="scheduleTitle">23년 11월 11일</div>
          <div className="scheduleContent">
            <div className="InputContent">판교 → 강남 → 홍대</div>
          </div>
          <div className="Edit3">
            <FontAwesomeIcon icon={faPenToSquare} className="editIcon3" onClick={EditGo} />
          </div>
        </div>
        <div className="schedule">
          <div className="scheduleTitle">23년 11월 12일</div>
          <div className="scheduleContent">
            <div className="InputContent">한옥마을 → 하회마을 → 광안리</div>
          </div>
          <div className="Edit4">
            <FontAwesomeIcon icon={faPenToSquare} className="editIcon4" onClick={EditGo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckSchedule;
