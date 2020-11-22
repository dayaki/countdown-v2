import Countdown, { zeroPad } from "react-countdown";

const Timer = ({ statusChange, data }) => {
  const Completionist = () => <p className="is-done">Time up!</p>;

  const renderer = ({ minutes, seconds, milliseconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div className={`countdown ${statusChange}`}>
          <h1>
            {zeroPad(minutes)} <span>:</span> {zeroPad(seconds)}
          </h1>
        </div>
      );
    }
  };
  return (
    <Countdown
      key={Date.now() + data}
      date={Date.now() + data}
      renderer={renderer}
      intervalDelay={0}
      precision={3}
    />
  );
};

export default Timer;
