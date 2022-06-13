// const hidden = document.querySelectorAll('.hidden')


document.querySelector('button').addEventListener('click', getFetch)
// document.querySelector('button').addEventListener('click', hide)

// function hide(){
//   hidden.forEach( e => {
//     if(e.style.display === 'none'){
//       e.style.display = 'block'
//     }else{
//       e.style.display = 'none'
//     }
//   })
// }

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=jldg0YqxPynByzYNC3wCPbvkhDfak4vkVL3WBi5R&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if( data.media_type === 'image'){
          document.querySelector('h3').style.display = 'block'
          document.querySelector('iframe').style.display = 'none'
          document.querySelector('img').style.display = 'block'
          document.querySelector('img').src = data.hdurl
        }else if(data.media_type === 'video'){
          document.querySelector('h3').style.display = 'block'
          document.querySelector('img').style.display = 'none'
          document.querySelector('iframe').style.display = 'block'
          document.querySelector('iframe').src = data.url
        }
        
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
