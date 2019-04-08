import React from "react";

function PupperCard(props) {
    return (
        <div className="pupper-card" >
            <img src={props.imgUrl} />
            <h3>A friendly {props.breed} commends you on your efforts</h3>
            <p>{props.greeting}</p>
            <p>{props.dogMessage}</p>
        </div>
    )
}

export default PupperCard
