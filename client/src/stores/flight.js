import { defineStore } from "pinia";
import airlinesDB from "../../../server/airlines_data.json" assert { type: "json" };
import airportDB from "../../../server/airport_data.json" assert { type: "json" };
import flightScheduleDB from "../../../server/flight_schedule.json" assert { type: "json" };

// adding image to DB
airlinesDB.airlines_data.map((el) => {
  if (el.Code === "GA")
    el.image =
      "https://1.bp.blogspot.com/-7GZE8e5zNuY/YWu4HNMnquI/AAAAAAAADek/CpIzS-i9gik4lB3ESPm5OxBVWNKmC0RawCNcBGAsYHQ/s2048/Garuda%2BIndonesia.png";
  else if (el.Code === "SQ")
    el.image =
      "https://i.pinimg.com/736x/46/27/cb/4627cbbe76a8b83cffe1f3e67cebfde7--corporate-logos-singapore.jpg";
  else if (el.Code === "QZ")
    el.image =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AirAsia_New_Logo.svg/2048px-AirAsia_New_Logo.svg.png";
});

export const useFlightStore = defineStore({
  id: "flight",
  state: () => {
    return {
      airlinesData: airlinesDB,
      airportData: airportDB,
      flightScheduleData: flightScheduleDB,
    };
  },
  actions: {
    async fetchFlight(order) {
      try {
        if (order === "ascName")
          this.flightScheduleData.sort((a, b) =>
            a.airlines.localeCompare(b.airlines)
          );
        else if (order === "descName")
          this.flightScheduleData.sort((a, b) =>
            b.airlines.localeCompare(a.airlines)
          );
        else if (order === "ascTime")
          this.flightScheduleData.sort((a, b) =>
            a.departure_time.localeCompare(b.departure_time)
          );
        else if (order === "descTime")
          this.flightScheduleData.sort((a, b) =>
            b.departure_time.localeCompare(a.departure_time)
          );
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: error,
          icon: "error",
          confirmButtonText: "Try again!",
        });
      }
    },
    async filterFilght(filter) {
      try {
        if (filter !== "All") {
          if (filter === "morning") {
            this.flightScheduleData = flightScheduleDB.filter((flight) => {
              let flightTime = new Date(flight.departure_time).getHours();
              return flightTime <= 12;
            });
          } else if (filter === "afternoon") {
            this.flightScheduleData = flightScheduleDB.filter((flight) => {
              let flightTime = new Date(flight.departure_time).getHours();
              return flightTime >= 12;
            });
          } else {
            this.flightScheduleData = flightScheduleDB.filter(
              (flight) => flight.airlines === filter
            );
          }
        } else {
          this.flightScheduleData = flightScheduleDB;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});
