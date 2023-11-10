import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import Icon from "@mdi/react";
import { mdiBusAlert } from "@mdi/js";
import "../../style/Schedule.css";
const Schedule = () => {
  return (
    <div className="ScheduleWrap">
      <div className="TopNav">
        <FontAwesomeIcon icon={faArrowLeftLong} className="back" size="xl" />
      </div>
      <div className="SldeBar">
        <div className="ExRate_Slde">
          <div className="SldeLogo">
            <FontAwesomeIcon icon={faDollarSign} className="Dollar Btn" />
            <Icon path={mdiBusAlert} size={1} className="Bus Btn" />
          </div>
        </div>
        <div className="Route_Slde FadeSlde">2</div>
      </div>
    </div>
  );
};

export default Schedule;
