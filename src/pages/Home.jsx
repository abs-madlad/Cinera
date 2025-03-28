import Mcard from "../components/Mcard"
import { useState } from "react"
function Home(){
    const [searchQuery, setSearchQuery]= useState("");
    const movies= [
        {id:1, title:"Zombieland",release_date:2009},
        {id:2, title:"Masaan",release_date:2015},
        {id:3, title:"No entry",release_date:2005},
        {id:4, title:"Kill",release_date:2024},
        {id:5, title:"Laapata Ladies",release_date:2023}
    ]

    const handleSearch= (e)=>{
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    }

    return (
        <div className="Home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search Movie Here..." className="search-input"
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)} />
            </form>
            <button type="submit" className="search-button">Search</button>
            <div className="movies-grid">
                {movies.map((movie) => 
                movie.title.toLowerCase().startsWith(searchQuery) && ( 
                    <Mcard movie={movie} key={movie.id} />
                    ))}
            </div>
        </div>
    )
}

export default Home
// if you're dynamically rendering multiple things like movies.map , do add the .key property even if it isn't present in the component
// so that react can identify this component compared to other ones that are being rendered