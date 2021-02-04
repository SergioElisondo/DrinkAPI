//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
  const inputVal = document.querySelector('input').value
  const takeInSpaces = inputVal.replace(/  +/g, ' ')
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+takeInSpaces

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        let drinkName = data.drinks[0].strDrink
        let drinkThumb = data.drinks[0].strDrinkThumb
        let drinkInst = data.drinks[0].strInstructions

        

        document.querySelector('h2').innerText = drinkName
        document.querySelector('img').src = drinkThumb
        document.querySelector('h3').innerText = drinkInst
      })
      .catch(err => {
          console.log(`error ${err}`)
      })
}

