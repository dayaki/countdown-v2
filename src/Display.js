import { Container, Row, Col } from "reactstrap";
import Timer from "./Timer";

const Display = ({ session, minister, date }) => {
  return (
    <div className="timer">
      <div className="session">
        {session && minister && (
          <h3>
            {session}
            <span>{minister}</span>
          </h3>
        )}
      </div>
      <Timer data={date} />
    </div>
  );
};

export default Display;
