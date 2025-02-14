import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import {MdDelete} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { incrementQty, removeFromCart, decrementQty } from '../redux/CartSlice'
import toast from 'react-hot-toast'

const ItemCard = ({id,name,price,img,qty}) => {

  const dispatch = useDispatch()
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-5">
        <MdDelete className="absolute right-7 text-gray-600 cursor-pointer"
         onClick={() => {
          dispatch(removeFromCart({id,name,price,img}));
          toast(`${name} Removed!`, {
            icon: "👋",
          });
        }}
        />
      <img 
      src={img}
      className='w-[80px] h-[80px]'
      alt='img'
      />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{name}</h2> 
        <div className="flex justify-between ">
            <span className='text-green-500 font-bold'>₹{price}</span>
        <div className="flex justify-center items-center gap-2 absolute right-7">
            <AiOutlineMinus 
            onClick={() => {
              qty > 1 ? 
              dispatch(decrementQty({ id }))
              : (qty = 1)
            }}
            className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"/>
            <span>{qty}</span>
            <AiOutlinePlus 
            onClick={() => {
              dispatch(incrementQty({ id }))
            }}
            className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
