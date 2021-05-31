import React from 'react';
import Card from './Card';
import Sdata from './Sdata';


   

const Services = (props) => {
  

  const imagge2 = 'https://source.unsplash.com/600x400/?tourism';

  return (
    <>
      <div className='my-5'>
        <h1 className='tab-center'>Our CServsceard</h1>
      </div>
      <div className='container-fluid mb-5'>
        <div className="row" >
          <div className="col-10 mx-auto" >
            <div className="row gy-4" >
              {Sdata.map((val, index) => {
                return <Card
                  imgsrc={val.imgsrc}
                  title={val.title}
                   index={index+1} key={index}/>
              })}
     
    
      
            </div>
          </div>
        </div>
      </div >

      
      </>
  );
}

export default Services;
