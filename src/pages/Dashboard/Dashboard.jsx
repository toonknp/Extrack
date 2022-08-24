import React, { useState, useEffect } from "react";
import BarChart from "../../components/BarChart/BarChart";
import NavBar from "../../components/NavBar/NavBar";
import axiosInstance from "../../configs/axios";
import "./Dashboard.css";
import CartList from "../../components/CartList/CardList";

const Dashboard = () => {
  const [cards, setCards] = useState([]);
  const recentCards = cards.slice(0, 2);
  const [dailyStats, setDailyStats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});


  const BMI = (user.weight / (user.height / 100) ** 2).toFixed(2);

  const getDailyStats = async () => {
    setLoading(true);
    const response = await axiosInstance.get("user/activities/dailystats");
    setDailyStats(response.data);
    setLoading(false);
  };

  const getUserInfo = async () => {
    const response = await axiosInstance.get("user/me");
    setUser(response.data);
  };

  const getData = async () => {
    const response = await axiosInstance.get("user/activities");
    setCards(response.data);
  };

  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

  let goalAchieved = 0;
  const getGoalAchieved = () => {
    const achievedDays = dailyStats.filter((day) => {
      if (Date.parse(day._id) >= Date.parse(sevenDaysAgo)) {
        return day;
      }
    });
    goalAchieved = achievedDays.length;
  };
  getGoalAchieved();

  useEffect(() => {
    getUserInfo();
    getDailyStats();
    getData();
  }, []);


  return (
    <div className="dash-board">
      <div className="container-dash">
        {/* <ProfileSession user={user} /> */}
        <section className="subconleft-dash">
          <div className="upleftsub">
            <div className="upleftsub-board">
              <div className="goal-dash">
                <div className="headgoal-dash">
                  <img src="./assets/icons8-trophy-100.png" alt="" />
                  <h3>Goal</h3>
                </div>
                <div className="inspiration-goal-dash">
                  <p className="inspiration">Inspiration:</p>
                  <p className="inspiration-content-input">
                    {user.inspiration || "-"}
                  </p>
                  <div className="goal-content">
                    <h1 className="goal-content-input1">
                      {goalAchieved || "0"}
                    </h1>
                    <h2>out of</h2>
                    <h2 className="goal-content-input2">
                      {user.weekly_goal || "7"}
                    </h2>
                    <h2>days</h2>
                  </div>
                </div>
                <div className="bmi-goal-dash">
                  <h4>BMI</h4>
                  <h1>{BMI || "-"}</h1>
                </div>
              </div>
              <div className="graph-dash">
                <div className="headtracking">
                  <img src="./assets/icons8-futures-100.png" alt="" />
                  <p>Track History</p>
                </div>
                <div className="bar-chart-tracking">
                  <BarChart dailyStats={dailyStats} loading={loading} />
                </div>
              </div>
            </div>
          </div>
          <div className="downleftsub-board">
            <div className="head-recentact">
              <img
                src="./assets/icons8-track-and-field-skin-type-1-100.png"
                alt=""
              />
              <p>Recent Activities</p> 
              <a href='/activities'><img src="./assets/icons8-menu-100.png" alt=""/></a>         
            </div>      
            <div className="recent-content">
              <CartList cards={recentCards} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;