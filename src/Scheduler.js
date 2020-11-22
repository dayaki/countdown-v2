import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import firebase from "./firebase";
import Timer from "./Timer";

function Scheduler({ data }) {
  const [session, setSession] = useState("");
  const [minister, setMinister] = useState("");
  const [timer, setTimer] = useState("");

  const handleSubmit = () => {
    if (minister !== "" && timer !== "") {
      const timerRef = firebase
        .database()
        .ref("countdown")
        .child("-MGRDowwchtwXT7kMWxp");
      timerRef.update({
        minister: minister,
        session: session,
        timer: timer,
      });
    }
  };

  return (
    <div className="form">
      <Container>
        <Row>
          <Col sm="6" md="6">
            <div className="schedule">
              <h2>Initiate Countdown</h2>
              <p>
                <label htmlFor="type">Session Type</label>
                <select
                  name="type"
                  id="type"
                  required
                  defaultValue={session}
                  onChange={(e) => setSession(e.target.value)}
                >
                  <option value="" selected disabled>
                    -- Select Session --
                  </option>
                  <option defaultValue="Prayer">Prayer</option>
                  <option defaultValue="Praise">Praise</option>
                  <option defaultValue="Choir">Choir Ministration</option>
                  <option defaultValue="Giving">Giving</option>
                  <option defaultValue="Worship">Worship</option>
                  <option defaultValue="Sermon">Sermon</option>
                  <option defaultValue="Closing">Closing Announcement</option>
                </select>
              </p>
              <p>
                <label htmlFor="handler">Session Handler</label>
                <input
                  type="text"
                  placeholder="Minister"
                  value={minister}
                  onChange={(e) => setMinister(e.target.value)}
                  required
                />
              </p>
              <p>
                <label htmlFor="timer">Session Time</label>
                <input
                  type="number"
                  placeholder="Input your desired time"
                  value={timer}
                  onChange={(e) => setTimer(e.target.value)}
                  required
                />
              </p>
              <p>
                <button onClick={handleSubmit}>Start Session</button>
              </p>
            </div>
          </Col>
          <Col sm="6" md="6">
            <div className="session">
              <h2>Current Session</h2>
              <h4>
                {data.session} - {data.minister}
              </h4>
              <div className="line"></div>
              <Timer data={data.timer * 60000} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Scheduler;
