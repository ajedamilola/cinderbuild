import React from 'react'

export default function BrandImage({image,dimensions = [150,150],name=""}) {
  return (
    <div className='bg-white rounded-3 shadow text-center' style={{width:"auto",maxWidth:dimensions[0],height:dimensions[1]}}>
        <img src={image} style={{
          maxHeight:"100%",
          maxWidth:"100%",
        }} alt={name}/>
    </div>
  )
}
