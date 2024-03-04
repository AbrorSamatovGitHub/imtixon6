import React from 'react'

const OfferMain = ({img,title}) => {
  return (
    <div>
      <img className='w-[334px] mb-[24px]' src={img} alt="" />
      <h4 className='text-btn text-white text-center'>{title}</h4>
    </div>
  )
}

export default OfferMain
