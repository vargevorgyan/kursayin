import React, { useState } from 'react'
import ModalXorurd from './ModalXorurd'
import ModalUxecuyc from './ModalUxecuyc'
import ModalHexinak from './ModalHexinak'

const Content = ({ setPage }) => {
  const [showModal, setShowModal] = useState(false)
  const [showModal1, setShowModal1] = useState(false)
  const [showModal2, setShowModal2] = useState(false)

  return (
    <>
      <ModalXorurd showModal={showModal} setShowModal={setShowModal} />
      <ModalUxecuyc showModal={showModal1} setShowModal={setShowModal1} />
      <ModalHexinak showModal={showModal2} setShowModal={setShowModal2} />
      <header className="py-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Social Network</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <button
                  onClick={() => setShowModal(true)}
                  className="hover:underline focus:outline-none"
                >
                  խորուրդ
                </button>
              </li>
              <li>
                <button
                  onClick={() => setShowModal1(true)}
                  className="hover:underline focus:outline-none"
                >
                  Օգնության պատուհան
                </button>
              </li>
              <li>
                <button
                  onClick={() => setShowModal2(true)}
                  className="hover:underline focus:outline-none"
                >
                  Հեղինակ
                </button>
              </li>
              <li>
                <button
                  onClick={() => setPage(3)}
                  className="hover:underline focus:outline-none"
                >
                  ելք
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="container mx-auto flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Connect with friends and share your moments
          </h1>
          <p className="text-lg mb-6">
            Join our social network and be part of the community.
          </p>
          <button className="bg-white text-blue-500 py-2 px-6 rounded-full hover:bg-blue-700 hover:text-white transition duration-300 focus:outline-none">
            Get Started
          </button>
        </div>
      </div>
    </>
  )
}

export default Content
