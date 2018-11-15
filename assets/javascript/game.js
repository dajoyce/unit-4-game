$(document).ready(function() {
  var wins = 0;
  var losses = 0;
  var total = 0;

  var redButtonValue = Math.floor(Math.random() * 12) + 1;
  var blueButtonValue = Math.floor(Math.random() * 12) + 1;
  var yellowButtonValue = Math.floor(Math.random() * 12) + 1;
  var greenButtonValue = Math.floor(Math.random() * 12) + 1;

  var computerGuess = Math.floor(Math.random() * 101) + 19;

  $("#cpuRandom").text(computerGuess);

  function resetGame() {
    redButtonValue = Math.floor(Math.random() * 12) + 1;
    blueButtonValue = Math.floor(Math.random() * 12) + 1;
    yellowButtonValue = Math.floor(Math.random() * 12) + 1;
    greenButtonValue = Math.floor(Math.random() * 12) + 1;
    computerGuess = Math.floor(Math.random() * 101) + 19;
    total = 0;

    $("#cpuRandom").text(computerGuess);
  }

  //resetGame();
  console.log(redButtonValue);
  console.log(blueButtonValue);
  console.log(yellowButtonValue);
  console.log(greenButtonValue);

  $("#redCrystalPics").on("click", function() {
    total += redButtonValue;
    $("#yourScore").text(total);
    if (total == computerGuess) {
      wins++;
      $("#wins").text("Wins: " + wins);
      resetGame();
    } else if (total > computerGuess) {
      losses++;
      $("#losses").text("Losses: " + losses);
      resetGame();
    }
    console.log(total);
  });

  $("#blueCrystalPics").on("click", function() {
    total += blueButtonValue;
    $("#yourScore").text(total);
    if (total == computerGuess) {
      wins++;
      $("#wins").text("Wins: " + wins);
      resetGame();
    } else if (total > computerGuess) {
      losses++;
      $("#losses").text("Losses: " + losses);
      resetGame();
    }
    console.log(total);
  });

  $("#yellowCrystalPics").on("click", function() {
    total += yellowButtonValue;
    $("#yourScore").text(total);
    if (total == computerGuess) {
      wins++;
      $("#wins").text("Wins: " + wins);
      resetGame();
    } else if (total > computerGuess) {
      losses++;
      $("#losses").text("Losses: " + losses);
      resetGame();
    }
    console.log(total);
  });

  $("#greenCrystalPics").on("click", function() {
    total += greenButtonValue;
    $("#yourScore").text(total);
    if (total == computerGuess) {
      wins++;
      $("#wins").text("Wins: " + wins);
      resetGame();
    } else if (total > computerGuess) {
      losses++;
      $("#losses").text("Losses: " + losses);
      resetGame();
    }
    console.log(total);
  });
  //   console.log(total);

  //   if (total == computerGuess) {
  //     wins++;
  //     $("#wins").text(wins);
  //   } else if (total > computerGuess) {
  //     losses++;
  //     $("#losses").text("Losses: " + losses);
  //   }
});

// 2) Need computer to randomly generate a number;
//should I limit the number to double digits so the game
//doesn't take forever?

//3) need computer to generate a new value for the crystals each game
// once value is determined need to add to player score

//4 if player score = computer random number alert/update win and reset game
// if player score > computer random number alert/update loss and reset game
