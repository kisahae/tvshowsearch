const form = document.querySelector("#form")
form.addEventListener("submit", async function (e) {
  e.preventDefault()
  let keyword = form.elements.query.value
  const options = {
    params: {
      q: keyword
    }
  }
  const api = await axios.get(`https://api.tvmaze.com/search/shows`, options)
  const res = api.data
  makeImages(res)
})

const makeImages = (res) => {
  const movieList = document.querySelector("#movieList")
  movieList.innerHTML = ""
  for (let result of res) {
    if (result.show.image) {
      const movieWrapper = document.createElement("div")
      let image = document.createElement("img")
      let name = document.createElement("p")
      image.src = result.show.image.medium
      name.innerText = result.show.name
      image.classList.add("movieName")
      movieWrapper.append(image, name)
      movieWrapper.classList.add("moviestyle")
      movieList.append(movieWrapper)
    }
  }
}
