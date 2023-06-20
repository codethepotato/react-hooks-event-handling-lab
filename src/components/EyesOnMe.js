// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
    return (
        <div>
            <button
                onBlur={(e) => {
                    console.log('Hey! Eyes on me!')}
                    }
                onFocus={(e) => {
                    console.log('Good!')}} > 
            </button>
        </div>
    )
}

export default EyesOnMe;