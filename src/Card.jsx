import React from 'react';

import Sdata from './Sdata';



const Card = (props) => {


    // const imagge2 = Sdata .map((val)=>{return val.img});

    return (
        <>


          

                            <div className="col-md-4 col-10 mx-auto">

                <div className="card" style={{ width: "18rem" }}>
                    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                                    <div className="card-body">
                                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text"> {props.index}<br />
                        some good paragraph</p>
                                        <a href="#" className="btn btn-primary"></a>
                                    </div>
                                </div>
                            </div>
                       
        </>
    );
}

export default Card;
