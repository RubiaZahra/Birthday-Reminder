import React from 'react'

const SingleBirthday = ({id,name,age,image,remove}) => {
  return (
    <>
      <div className="d-flex justify-content-between my-1">
          <div className="d-flex gap-2 align-items-center ">
           <img width={60} height={60} className='rounded-circle border'style={{objectFit:"contain"}}  src={image} alt="" />
           <div className="d-flex flex-column">
            <h6 className='text-secondary'>{name}</h6>
            <p className='year'>{age} Years</p>
           </div>
       
          </div>
          
          <button onClick={()=>remove(id)}  className='btn btn-danger align-self-center'>Remove</button>

        </div> 

    
    </>
  )
}

export default SingleBirthday