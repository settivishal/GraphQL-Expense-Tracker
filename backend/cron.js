import cron from "cron";
import https from "https";

const URL = "https://graphql-expense-tracker-9v1j.onrender.com";

const job = new cron.CronJob("14 * * * *", () => {
  https
    .get(URL, (res) => {
      if (res.statusCode === 200) {
        console.log("GET request succesfully sent");
      } else {
        console.log("GET request failed");
      }
    })
    .on("error", (err) => {
      console.error("Error in GET request: ", err);
    });
});

export default job;
