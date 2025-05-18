function RollDice() {

    const numDice = document.getElementById("numberDice").value;
    const resultDice = document.getElementById("diceResults");
    const imageDice = document.getElementById("diceImages");


    const values=[];
    const images=[];

    for(let i=0;i<numDice;i++)
    {
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="dice ${value}.png" alt="Dice ${value}">`)
    }

    resultDice.textContent=`dice: ${values.join(', ')}`;
    imageDice.innerHTML = images.join('');


}