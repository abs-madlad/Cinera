import Mcard from "../components/Mcard"

function Home(){
    const movies= [
        {id:1, title:"Zombieland",release_date:2009},
        {id:2, title:"Masaan",release_date:2015},
        {id:3, title:"No entry",release_date:2005},
        {id:4, title:"Kill",release_date:2024},
        {id:5, title:"Laapata Ladies",release_date:2023}
    ]

    const handleSearch= ()=>{

    }

    return (
        <div className="Home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search Movie Here..." className="search-input" />
            </form>
            <button type="submit" className="search-button">Search</button>
            <div className="movies-grid">
                {movies.map((movie) => ( 
                    <Mcard movie={movie} key={movie.id} />
                    ))}
            </div>
        </div>
    )
}

export default Home