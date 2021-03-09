export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}

export function sendUrls(newURL) {
  return fetch("http://localhost:3001/api/v1/urls", {
    method: "POST",
    body: JSON.stringify(newURL),
    headers: {
      "Content-type": "application/json",
    },
  })
    
}
