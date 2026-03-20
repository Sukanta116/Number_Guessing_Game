

// Generate Random Whole Number between Min(inclusive) and max(exclusive)
function getRandomNumber(min,max)
{
    return Math.floor(Math.random()*(max-min)+min);
}

function playGame()
{
    //Compare  Value
    const value = getRandomNumber(1,10);
    
      let Guess = prompt("Enter A Number Between 1 to 10");
   function askGuess()
    {
        
        if(Guess == null)
        {
            document.getElementById("output").innerText= "Enter a valid Number";
            document.getElementById("output").innerText = "Game cancelled ❌";
            return;
        }
        Guess = Number(Guess);

        if(Guess == value)
        {
            document.getElementById("output").innerText = "Correct! ✅ The number was " + value;
            return;
        }

        else if(Guess > value)
        {
           Guess= prompt("Too High ⬆️ Try again!");
           askGuess();
        }

        else
        {
            Guess=prompt ("Too Low ⬇️ Try again!");
            askGuess();
        }
    }
    askGuess();
}