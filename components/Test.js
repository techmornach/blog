import { useState, useRef, Fragment } from 'react'
import Image from 'next/image'

const Test = ({ thumb, thumbWidth, thumbHeight, thumbAlt, video, videoWidth, videoHeight }) => {
  const [videoOpen, setVideoOpen] = useState(false)
  const videoRef = useRef(null)

  const openModal = () => {
    setVideoOpen(true)
  }

  const closeModal = () => {
    setVideoOpen(false)
    // Pause the video when the modal is closed
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }

  const toggleVideo = () => {
    if (videoOpen) {
      closeModal()
    } else {
      openModal()
    }
  }

  return (
    <>
      <div>
        <div
          className="relative mb-8 flex justify-center"
          data-aos="zoom-y-out"
          data-aos-delay="450"
        >
          <div className="flex flex-col justify-center">
            {videoOpen ? (
              <video ref={videoRef} width={videoWidth} height={videoHeight} autoPlay>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <>
                <Image
                  src={thumb}
                  width={thumbWidth}
                  height={thumbHeight}
                  alt={thumbAlt}
                  objectFit="cover"
                />
                <svg
                  className="absolute inset-0 mx-auto h-auto max-w-full md:max-w-none"
                  width="768"
                  height="432"
                  viewBox="0 0 768 432"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hero-ill-a">
                      <stop stopColor="#FFF" offset="0%" />
                      <stop stopColor="#EAEAEA" offset="77.402%" />
                      <stop stopColor="#DFDFDF" offset="100%" />
                    </linearGradient>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="99.24%" id="hero-ill-b">
                      <stop stopColor="#FFF" offset="0%" />
                      <stop stopColor="#EAEAEA" offset="48.57%" />
                      <stop stopColor="#DFDFDF" stopOpacity="0" offset="100%" />
                    </linearGradient>
                    <radialGradient
                      cx="21.152%"
                      cy="86.063%"
                      fx="21.152%"
                      fy="86.063%"
                      r="79.941%"
                      id="hero-ill-e"
                    >
                      <stop stopColor="#4FD1C5" offset="0%" />
                      <stop stopColor="#81E6D9" offset="25.871%" />
                      <stop stopColor="#338CF5" offset="100%" />
                    </radialGradient>
                    <circle id="hero-ill-d" cx="384" cy="216" r="64" />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <circle fillOpacity=".04" fill="url(#hero-ill-a)" cx="384" cy="216" r="128" />
                    <circle fillOpacity=".16" fill="url(#hero-ill-b)" cx="384" cy="216" r="96" />
                    <g fillRule="nonzero">
                      <use fill="#000" xlinkHref="#hero-ill-d" />
                      <use fill="url(#hero-ill-e)" xlinkHref="#hero-ill-d" />
                    </g>
                  </g>
                </svg>
              </>
            )}
          </div>
          <button
            className="group absolute top-full flex -translate-y-1/2 transform items-center rounded-full bg-black p-4 font-medium shadow-lg dark:bg-white"
            onClick={toggleVideo}
          >
            <svg
              className="h-6 w-6 shrink-0 fill-current text-white group-hover:text-primary-color-500 dark:text-black"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
              <path d="M10 17l6-5-6-5z" />
            </svg>
            <span className="ml-3 text-black dark:text-white">
              {videoOpen ? 'Close Video' : 'Meet me (2 min)'}
            </span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Test
