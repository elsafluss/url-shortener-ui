export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}

export const sendUrls = (newURL) => {
  return fetch("http://localhost:3001/api/v1/urls", {
    method: "POST",
    body: JSON.stringify(newURL),
    headers: {
      "Content-type": "application/json",
    }
  }).then((response) => console.log(response.json()))
}

/*
https://www.bbc.co.uk/programmes/articles/1g84m0sXpnNCv84GpN2PLZG/the-game-30th-anniversary-edition
*/