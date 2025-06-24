 export const getGifs = async (category) => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=Hr9P5VR1rEMWN6bNOIb4WI5BEQPS8CX1&q=${category}&limit=10`;
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        });
        console.log(gifs)
        return gifs;
    }