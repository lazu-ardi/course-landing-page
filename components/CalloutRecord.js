import React from 'react'
import Image from 'next/image'

export default function CalloutRecord({ details }) {
  return (
    <div className="bg-gray-800 py-20 px-10">
      <div className="mx-auto flex max-w-6xl flex-col md:flex-row md:items-center">
        <div className="grow p-4 md:w-[60%]">
          <h2 className="text-4xl font-bold text-gray-200">
            {details.smallTitle}
            <span className="mb-10 block text-6xl font-bold text-yellow-200">
              {details.bigTitle}
            </span>
          </h2>

          <p className="max-w-lg text-xl text-gray-200">
            {details.description}
          </p>
        </div>

        <div className="w-full p-4">
          <Image
            src={details.image.url}
            alt={details.smallTitle + details.bigTitle}
            width={details.image.width}
            height={details.image.height}
          />
        </div>
      </div>
    </div>
  )
}
