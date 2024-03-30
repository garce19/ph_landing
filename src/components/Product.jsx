// eslint-disable-next-line no-unused-vars
import React from 'react'
import image from '/src/assets/testPic.jpg'
const prod = {
    name: 'Family',
    imageUrl: image,
    imageSize: 180
}


function Product() {
  return (
    <div>
        <img src={prod.imageUrl} alt={'Foto de ' + prod.name} style={{width: prod.imageSize, height:prod.imageSize}}/>
    </div>
  )
}

export default Product