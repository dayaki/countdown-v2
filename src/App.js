import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Display from "./Display";
import Scheduler from "./Scheduler";
import firebase from "./firebase";
import "./App.css";

const App = () => {
  const [timerData, setTimerData] = useState("");

  // useEffect(() => {
  //   const mediaQueryList = window.matchMedia("(min-width: 960px)");
  //   if (mediaQueryList.matches) {
  //     alert("YES");
  //   } else {
  //     alert("No");
  //   }
  // }, []);

  useEffect(() => {
    const todoRef = firebase.database().ref("countdown");
    todoRef.on("value", (snapshot) => {
      let data = {};
      snapshot.forEach(function (childSnapshot) {
        var childData = childSnapshot.val();
        data = childData;
      });

      if (data.timer) {
        setTimerData(data);
      }
    });
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Display
            minister={timerData.minister}
            session={timerData.session}
            date={timerData.timer * 60000}
          />
        </Route>
        <Route path="/scheduler">
          <Scheduler data={timerData} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
