import React from 'react'

export default function BrandImage({image,dimensions = [150,150],name=""}) {
  return (
    <div className='bg-white brand rounded-3 text-center d-flex justify-content-center align-items-center img-scale' style={{width:"auto",maxWidth:dimensions[0],height:dimensions[1]}}>
        <img src={image} style={{
          width:"80%",
        }} alt={name}/>
    </div>
  )
}
