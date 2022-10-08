class TMDB {
    constructor(key){
        this.apiKey = key;
        this.imageURL = "https://image.tmdb.org/t/p/w500";
        this.genreNeaded = true;
        this.genders = [];
    }
    async getTrendings(page = 1){
        await this.getGenres();
        try{
            const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${this.apiKey}&page=${page}`);
            if(response.ok){
                const data = await response.json();
                return this.transfomResult(data);
            }
        }
        catch(err){
            console.log(err);
        }
    }
    transfomResult(data){
        data.results = data.results.map(item => {
            item.poster_path = this.imageURL + item.poster_path;
            item.backdrop_path = this.imageURL + item.backdrop_path;
            item.genre_ids = this.transfomGenders(item.genre_ids);
            return item;
        })
        return data;
    }
    async getGenres(){
        if(this.genreNeaded){
            this.genreNeaded = !this.genreNeaded;
            const URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}`
            const URL2 = `https://api.themoviedb.org/3/genre/tv/list?api_key=${this.apiKey}`
            try{
                const response = await fetch(URL);
                if(response.ok){
                    const data = await response.json();
                    this.genders.push(...data.genres);
                }
            }
            catch(err){
                console.error("Error in getGenres")
                console.log(err);
            }
            try{
                const response = await fetch(URL2);
                if(response.ok){
                    const data = await response.json();
                    this.genders.push(...data.genres);
                }
            }
            catch(err){
                console.error("Error in getGenres")
                console.log(err);
            }
            //console.log(this.genders);
        }
    }
    transfomGenders(arr = []){
        arr = arr.map((id) => this.genders.find(item => item.id === id).name);
        return arr;
    }
}

export default TMDB;