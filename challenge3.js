// Test data


const dolphinsScore1 = 97;
const dolphinsScore2 = 112;
const dolphinsScore3 = 101;
const dolphinAverageScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3

const koalaScore1 = 109;
const koalaScore2 = 95;
const koalaScore3 = 123;
const koalaAverageScore = (koalaScore1 + koalaScore2 + koalaScore3) / 3

// Display results

console.log(`Dolphins' result ${dolphinAverageScore}, Koalas' result ${koalaAverageScore}`)

// Who is the winner?

if ((dolphinAverageScore > koalaAverageScore) && dolphinAverageScore >= 120) {

    console.log("Dolphins' team is a winner");

} else if ((dolphinAverageScore < koalaAverageScore) && koalaAverageScore >= 120) {

    console.log("Koalas' team is a winner");

} else if ((dolphinAverageScore === koalaAverageScore) && dolphinAverageScore >= 120 && koalaAverageScore >= 120) {

    console.log("We have a draw, let's plate a rematch");

} else {
    console.log("Any of the team has qualified to the tournament")
}

