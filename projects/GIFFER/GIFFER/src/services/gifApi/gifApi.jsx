const keyApi = 'MlzL2pLDzkZvqYhjmLE5CBz5LpW328YX'

function getGif (keyword){  
const urlApi = `https://api.giphy.com/v1/gifs/search?api_key=${keyApi}&q=${keyword}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
 
  return fetch(urlApi)
         .then(res => res.json())
         .then(res=>{
         const {data} = res
         const gifs = data.map(image=>{
           const {id, title, images}  = image
           const {url} = images.fixed_height
           return {id, title, url}
          } )
         return gifs

  })
  
}

export {getGif}