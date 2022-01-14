
let stack = 100;
let bet = 1;
while(stack!=0 && stack!=200)
{
    console.log("Every Day Stack is " + stack);
    console.log("EveryTime Bet is " + bet);
            
    let game=Math.floor(Math.random()*2);
    if (game == 1)
    {
        console.log("Gambler Won the Game ");
        stack += 1;
    }
    else
    {
        console.log("Gambler Lost the Game ");
        stack -= 1;
    }
    console.log("Final Stack: " + stack);
}