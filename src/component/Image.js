import React from 'react'
import { AiOutlineHeart, AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { addToCartAtom, toogleAtom, cartItems, removeCartAtom } from '../hooks/main'
import { useAtom } from 'jotai'

function Image({photo}) {
    const [, toogleAtomFn] = useAtom(toogleAtom)
    const [, addToCartAtomFn] = useAtom(addToCartAtom)
    const [, removeCartAtomFn] = useAtom(removeCartAtom)
    const [allCartItems] = useAtom(cartItems)
    const toogleFavorite = () => {
        toogleAtomFn(photo.id)
    }
    const setCartItem = () => {
        addToCartAtomFn(photo)
    }
    const removeCartItem = () => {
        removeCartAtomFn(photo.id)
    } 
 
    const heartIcon = () => {
        if(!photo.isFavorite)
            return <AiOutlineHeart className='icon' onClick={toogleFavorite} />
        else 
            return <AiFillHeart className='icon'  onClick={toogleFavorite} />
    }

    const addToCart = () => {
        const alreadyInCart = allCartItems.some((item) => item.id === photo.id)
        if(!alreadyInCart)
            return <AiOutlineShoppingCart className='add-icon' onClick={setCartItem}/>
        else 
            return <BsFillCartCheckFill className='add-icon' onClick={removeCartItem} />
    }

  return (
    <div className='photo-wrap'>
        <img className='photo' src={photo.url} alt='random' />
        {heartIcon()}
        {addToCart()}
    </div>
  )
}

export default Image