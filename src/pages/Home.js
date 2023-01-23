import React from 'react'
import { allPhotos } from '../hooks/main'
import { useAtom } from 'jotai'
import Image from '../components/Image'

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