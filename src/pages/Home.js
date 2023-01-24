import React from 'react'
import { allPhotos } from '../hooks/atoms'
import { useAtom } from 'jotai'
import Image from '../component/Image'

function Home() {
  const [allPhotosAtom] = useAtom(allPhotos)

  return (
    <div>
        <div className='photo-cont'>
            {allPhotosAtom.map((photo) => (
                <Image key={photo.id} photo={photo} />
            ))}
        </div>
    </div>
  )
}

export default Home