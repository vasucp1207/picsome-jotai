import { atom, useAtom } from 'jotai'

export const allPhotos = atom([])

export const getAllPhotos = atom(null, async (get, set) => {
    const res = await fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
    set(allPhotos, await res.json())
})

export const toogleAtom = atom(null, (get, set, id) => {
    const photos = get(allPhotos)
    const updateArr = photos.map((photo) => {
        if(photo.id === id) {
            return {
                ...photo,
                isFavorite: !photo.isFavorite
              }
        }
        return photo
    })
    set(allPhotos, updateArr)
})

export const cartItems = atom([])

export const addToCartAtom = atom(null, (get, set, newPhoto) => {
    set(cartItems, prev => [ ...prev, newPhoto ])
})

export const removeCartAtom = atom(null, (get, set, rmId) => {
    set(cartItems, (prevItems) => prevItems.filter((item) => item.id !== rmId));
})