const API_KEY = "YOUR_API_KEY";

fetch("https://api.football-data.org/v4/competitions/WC/matches", {
  headers: {
    "X-Auth-Token": API_KEY,
  },
})
  .then((res) => res.json())
  .then((data) => {
    data.matches.forEach((match) => {
      console.log(
        `${match.homeTeam.name} ${match.score.fullTime.home ?? "-"} - ${match.score.fullTime.away ?? "-"} ${match.awayTeam.name}`,
      );
    });
  })
  .catch(console.error);