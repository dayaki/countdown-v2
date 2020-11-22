// import CurrentTime from "./CurrentTime";
import Timer from "./Timer";

const Display = ({ session, minister, date }) => {
  return (
    <div className="timer">
      {/* <CurrentTime /> */}
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
