import { useEffect, useState } from 'react'
import ModalHexinak from './ModalHexinak'

const Animation = () => {
  const [showModal, setShowModal] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowModal(false)
    }, 10000)
  }, [])

  return (
    <div className="box-container">
      {!showModal && (
        <>
          <div className="box" />
          <div className="box" />
          <div className="box" />
        </>
      )}
      <ModalHexinak showModal={showModal} setShowModal={setShowModal} />
    </div>
  )
}

export default Animation
