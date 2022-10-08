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
    async getMoviInfo(id){
        await this.getGenres();
        try{
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`);
            if(response.ok){
                const data = await response.json();
                return this.transfomResult(data);
            }
        }
        catch(err){
            console.log(err);
        }
    }
    async getMoviCredits(id){
        await this.getGenres();
        try{
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.apiKey}`);
            if(response.ok){
                const data = await response.json();
                data.cast = this.transfromCasts(data.cast);
                return data;
            }
        }
        catch(err){
            console.log(err);
        }
    }
    async getMoviReviews(id){
        await this.getGenres();
        try{
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${this.apiKey}`);
            if(response.ok){
                const data = await response.json();
                // data.cast = this.transfromCasts(data.cast);
                return data;
            }
        }
        catch(err){
            console.log(err);
        }
    }
    transfomResult(data){
        if(Array.isArray(data)){
            data.results = data.results.map(item => {
                item.poster_path = this.imageURL + item.poster_path;
                item.backdrop_path = this.imageURL + item.backdrop_path;
                item.genre_ids = this.transfomGenders(item.genre_ids);
                return item;
            })
        }
        else{
            data.poster_path = this.imageURL + data.poster_path;
            data.backdrop_path = this.imageURL + data.backdrop_path;
            data.genre_ids = this.transfomGenders(data.genre_ids);
        }
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
        }
    }
    transfomGenders(arr = []){
        arr = arr.map((id) => this.genders.find(item => item.id === id).name);
        return arr;
    }
    transfromCasts(arr = []){
        arr = arr.map(item => {
            item.profile_path = this.imageURL + item.profile_path;
            return item
        });
        return arr
    }
}

export default TMDB;