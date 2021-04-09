import React, { Component } from "react";
import Game from "./games.json";

const games = Game.map(
    (Game) => 
    {
        return(
            
            <div class="bg-dark col-md-5 p-lg-5 mx-auto my-5" key={Game.id}>
                 
                
                    <div className="card shadow-sm">
                        
                        <img src={Game.image} alt={Game.game} />
                        <div className="card-body">
                            <p className="card-text">{Game.description}</p>
                                <small className="text-muted">Price: ${Game.price}</small>
                        </div>
                        
                    </div>
                    
                </div>
        );
    }
);

class Content extends Component {
    render() {
        return (
            <div className="album py-5 bg-light">
            <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                {games}

            </div>
            </div>
            </div>
        );
    }
}

export default Content;
