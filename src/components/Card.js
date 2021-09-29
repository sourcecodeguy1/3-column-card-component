import React from 'react';

import Button from "./Button";

const Card = ({cardID, backColorProp, cardTitle, bodyMessage, cardImage, btnColor}) => {
    return(

        <div className={`row`}>
            <div style={{backgroundColor: backColorProp}} className={`boxes`}>

                <br />

                <div className={`logo`}>

                    <img src={`/images/${cardImage}`} alt="Car"/>

                </div>

                <br />

                <div className={`title`}>{cardTitle}</div>

                <br />

                <div className={`body`}>

                    {bodyMessage}

                </div>

                <br />

                <div className={`footer`}>
                    <Button bgColor={backColorProp} id={cardID} textColor={btnColor} />
                </div>

            </div>
        </div>

    );
}

export default Card;