import "../../style/EditSchedule.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const EditSchedule = () => {
  const CheckGo = () => {
    window.location.replace("/schedule/show");
  };
  return (
    <>
      <div className="EditScheduleWrap">
        <FontAwesomeIcon icon={faArrowLeft} className="back" />
        <div className="EditScheduleContentWrap">
          <div className="EditScheduleTitle">23년 11월 9일</div>
          <input type="text" className="EditScheduleWrite" />
        </div>
      </div>
      <button className="EditComplete" onClick={CheckGo}>
        수정 완료
      </button>
    </>
  );
};

export default EditSchedule;
