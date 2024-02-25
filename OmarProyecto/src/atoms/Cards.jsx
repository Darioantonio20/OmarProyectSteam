import React, { useState, useEffect} from "react";

function Cards() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setGames(data))
        .catch(error => console.error(error));
    }, []);
    return ( 
        <>
            <div className="row d-flex justify-content-center align-items-center">
                {games.map((game, index) => (
                    <div key={index} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                        <div className="card mt-3 mb-3" style={{width: "20rem"}}>
                            <img src={game.image} className="card-img-top" alt={game.title}/>
                            <div className="card-body">
                                <h5 className="card-tittle">{game.title}</h5>
                                <p className="card-text">{game.description}</p>
                                <a href="#" className="btn btn-primary">more</a>
                            </div>
                        </div>
                    </div>
                ))};
            </div>
        </>
     );
}

export default Cards;