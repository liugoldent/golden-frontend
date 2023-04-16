import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillTrendUp } from "@fortawesome/free-solid-svg-icons";

function AnimatedIcon() {
  return (
    <div className="inline-flex items-center animate-pulse">
      <FontAwesomeIcon
        className="font-serif text-4xl"
        icon={faMoneyBillTrendUp}
      />
    </div>
  );
}

export default AnimatedIcon;
