import "../../style/EditDummy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const EditDummy = () => {
  const CheckGo = () => {
    window.location.replace("/schedule/show");
  };
  return (
    <>
      <div className="EditScheduleWrap">
        <FontAwesomeIcon icon={faArrowLeft} className="back" />
        <div className="EditScheduleContentWrap">
          <div className="EditScheduleTitle">23년 11월 9일</div>
          <div className="alksndt">킨텍스 → 서울역</div>
        </div>
      </div>
      <button className="EditComplete" onClick={CheckGo}>
        수정 완료
      </button>
    </>
  );
};

export default EditDummy;
