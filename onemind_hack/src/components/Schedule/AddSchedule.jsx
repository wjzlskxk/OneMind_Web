import "../../style/AddSchedule.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const AddSchedule = () => {
  const LoadToMain = () => {
    window.location.replace("/");
  };
  const PostComplete = () => {
    alert("작상되었습니다.");
    window.location.replace("/schedule/check");
  };
  return (
    <div className="AddScheduleWrap">
      <div className="PageTitle">
        <FontAwesomeIcon icon={faArrowLeft} className="back" onClick={LoadToMain} />
        <h1 className="title">플래너</h1>
      </div>
      <div className="AddInput">
        <input className="Write" />
        <button className="AddBtn" onClick={PostComplete}>
          플래너 추가
        </button>
      </div>
    </div>
  );
};

export default AddSchedule;
