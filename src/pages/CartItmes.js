import React from 'react'
import { cartItems, removeCartAtom } from '../hooks/main'
import { useAtom } from 'jotai'
import { AiFillDelete } from 'react-icons/ai'

function CartItmes() {
    const [allCartItems] = useAtom(cartItems)
    const [, removeCartAtomFn] = useAtom(removeCartAtom)
    // don't update the atom from function update the atom directly from the onClick
    const rmFromCart = (photo) => {
        removeCartAtomFn(photo.id)
    }
  return (
    <div>
        <div className='cart-wrap'>
            {allCartItems.map(photo => {
                return (
                    <div className='cart-item'>
                        <img className='cart-img' src={photo.url} alt='random' />
                        <AiFillDelete className='delete-icon' key={photo.id} onClick={() => removeCartAtomFn(photo.id)} />
                    </div>
                )
            })}
            {!allCartItems.length && <h1 className='msg'>Your Cart is empty shop now from out store.</h1>}
        </div>
    </div>
  )
}

export default CartItmes