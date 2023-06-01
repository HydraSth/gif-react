const apiKey="AuYSKZd8jqkNM0skIbqk7wd2aD4DeS3h"
export default function getGifs({keyword="gato"}) {
    const apiUrl=`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=es`;
    return fetch(apiUrl)
    .then(response => response.json())
    .then(file =>{
        const {data}= file;
        const arrayDeGifs= data.map(gif => {
            const {images, title,id}= gif;
            const {mp4}=images.downsized_small;
            return {keyword,title, id, mp4};
        });
        return arrayDeGifs;
    });
}