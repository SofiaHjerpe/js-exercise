function inputResponse() {
  const tempsInCelcius = [
    10, 20, 30, 45, 50, 60, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76,
    77, 78, 79, 80, 81, 82, 83, 84, 85, 90, 100,
  ];

  const minTemp = [20, 25, 30];
  const maxTemp = [90, 100, 105];
  const optTemp = tempsInCelcius.splice(15, 1);
  const acceptTemp = tempsInCelcius.splice(15, 4);
  acceptTemp.unshift(73);
  let userInput = document.getElementById("userInput").value;
  let celcius = (userInput - 32) / 1.8;

  while (celcius < acceptTemp[0] || celcius > acceptTemp[4]) {
    userInput = window.prompt("Wrong temp! Please chose another temp:");
    celcius = (userInput - 32) / 1.8;

    if (
      celcius === minTemp[0] ||
      celcius === minTemp[1] ||
      celcius === minTemp[2]
    ) {
      window.alert("It's too cold, you should turn the heat up instead!!!");
    }

    if (
      celcius === maxTemp[0] ||
      celcius === maxTemp[1] ||
      celcius === maxTemp[2]
    ) {
      window.alert("It's too hot, you should turn the heat down instead!!!");
    }
  }

  window.alert("That is a good temp!");
  if (celcius === optTemp[0]) {
    window.alert("THANK YOU! You hit the perfect temp");
  }
}
