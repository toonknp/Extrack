import Chart from "react-apexcharts";
import React, { useState, useEffect } from "react";

const BarChart = ({ dailyStats, loading }) => {
  if (loading) return <h2>Loading..</h2>

  const [trackingName, setTrackingName] = useState([]);
  const [trackingValue, setTrackingValue] = useState([]);


  const getWeekDay = (firstDay) => {
    const day = firstDay.getDay()
    switch (day) {
      case 0:
        return ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
        break
      case 1:
        return ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
        break
      case 2:
        return ['tue', 'wed', 'thu', 'fri', 'sat', 'sun', 'mon']
        break
      case 3:
        return ['wed', 'thu', 'fri', 'sat', 'sun', 'mon', 'tue']
        break
      case 4:
        return ['thu', 'fri', 'sat', 'sun', 'mon', 'tue', 'wed']
          break
      case 5:
        return ['fri', 'sat', 'sun', 'mon', 'tue', 'wed', 'thu']
        break
      case 6:
        return ['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri']
        break
    }
  }

  const getWeeklyStats = () => {
    //get last 7 days' date
    const sevenDays = [...Array(7).keys()].map(index => {
      const date = new Date();
      date.setDate(date.getDate() - index);
      return date.toISOString().slice(0, 10);
    });
    // console.log('date', sevenDays)

    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000 + (7 * 60 * 60 * 1000))

    // get last 7 days' data
    let currentWeek = []
    for (let day of dailyStats) {
      if (Date.parse(day._id) >= Date.parse(sevenDaysAgo)) {
        day._id = day._id.slice(0, 10)
        currentWeek.push(day)
      }
    }
    // console.log('test', currentWeek)

    // keep data in weeklyStats
    let weeklyStats = {}
    for (let i = 0; i < sevenDays.length; i++) {
      for (let date of currentWeek) {
        if (sevenDays[i] == date._id) {
          weeklyStats[sevenDays[i]] = date.total_duration
          break;
        }
        weeklyStats[sevenDays[i]] = 0
      }
    }
    
    const reversedValues = Object.values(weeklyStats).reverse();
    // console.log('weeklyStats', weeklyStats)
    // setTrackingValue(Object.values(weeklyStats))
    setTrackingValue(reversedValues)
    // set keys of chart
    // setTrackingName(Object.keys(weeklyStats))
    setTrackingName(getWeekDay(sevenDaysAgo))

  }

  useEffect(() => {
    getWeeklyStats()
  }, [])

  return (
    <React.Fragment>
      <div className="container-fluid mb-5">
        <h2 className="text-center mt-3 mb-3"></h2>

        <Chart
          type="bar"
          width={650}
          height={387}
          series={[
            {
              name: "Total Duration",
              data: trackingValue,
            },
          ]}
          options={{
            title: {
              text: "",
              style: { fontSize: 30 },
            },

            subtitle: {
              text: "",
              style: { fontSize: 18 },
            },

            colors: ["#22345C"],  //สีกราฟแท่ง 
            theme: { mode: "light" },

            xaxis: {
              tickPlacement: "on",
              categories: trackingName,
              title: {
                text: "Day per week",
                style: { color: "#040404", fontSize: 17 },  //สีชื่อแกน x
              },
            },

            yaxis: {
              labels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: { fontSize: "15", colors: ["#34495E"] }, //สีอักษรแกน y
              },
              title: {
                text: "Time (minute)",
                style: {color: "#040404", fontSize: 17 },  //สีแกน y
              },
            },

            legend: {
              show: true,
              position: "left",
            },

            dataLabels: {
              formatter: (val) => {
                return `${val}`;
              },
              style: {
                colors: ["#F1C40F"],  //text in bar
                fontSize: 15,
              },
            },
          }}
        ></Chart>
      </div>
    </React.Fragment>
  );
}

export default BarChart;