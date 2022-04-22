import React from 'react'

export default function BrandImage({image,dimensions = [150,160],name=""}) {
  return (
    <div className='bg-white brand rounded-3 text-center d-flex justify-content-center align-items-center img-scale mx-auto p-1' style={{width:"auto",maxWidth:dimensions[0],height:dimensions[1]}}>
        <img src={image} style={{
          width:"90%",
          height:"100%"
        }} alt={name}/>
    </div>
  )
}
