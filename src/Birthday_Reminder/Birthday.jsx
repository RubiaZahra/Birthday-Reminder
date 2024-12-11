import React, { useState } from 'react'
import SingleBirthday from './SingleBirthday'
import { bday } from './bday'

const Birthday = () => {
  const[num,setNum] = useState(bday);

  const removePerson = (id)=>{
     const newData = num.filter((item,index)=>{
      return item.id !== id;
     })
     setNum (newData)
  };
 
  return (
    <>
  
    <div className="conatiner-fluid bg-info d-flex justify-content-center align-items-center" 
    style={{height:"100vh"}}>
      <div className="container ">
         <div className="col-lg-4 mx-auto p-3 card shadow">
          <h1 className='display-6 text-center mb-4'>{num.length} Birthdays today</h1>
          {num.map((item,index)=>{
           return(
            <> 
               <SingleBirthday key={item.id} {...item} remove={removePerson}/>
               
            </>
           );
          })}
        
         
          <button onClick={num.length > 0 ? ()=> setNum([]) : () =>setNum(bday) } className={`btn ${num.length > 0 ? "btn-danger":"btn-success"}    my-2`}>
            {num.length >0?"Remove all" : "Refresh all"}</button>
         </div>
      </div>
    </div>
    </>
  )
}

export default Birthday