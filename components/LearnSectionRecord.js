import React from 'react'

export default function LearnSectionRecord({ details }) {
  return (
    <div className="max-w-8xl mx-auto py-20 px-8">
      <h2 className="mb-8 text-4xl font-bold">{details.title}</h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {details.learningPoints.map((point) => (
          <div
            key={point.id}
            className="flex flex-col rounded-lg bg-gray-50 text-gray-600"
          >
            <div className="flex items-center justify-between rounded-t-lg border-2 border-gray-500 px-3 py-3 font-bold text-gray-700">
              <div className="flex space-x-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
            </div>

            <div className="flex flex-grow items-center justify-center rounded-b-lg border-2 border-t-0 border-gray-500 py-6 px-8 text-center">
              {point.title}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-7xl space-y-10 px-8 py-24 text-8xl text-gray-500 md:flex md:justify-center md:space-x-20 md:space-y-0 xl:px-0">
        <div>
          <span className="flex items-center font-extrabold text-black">
            <span>{details.numberOfLessons}</span>
            <span className="text-2xl text-purple-500">+</span>
          </span>
          <span className="mt-2 block text-xl">lessons</span>
        </div>
        <div>
          <span className="flex items-center font-extrabold text-black">
            <span>{details.hoursOfContents}</span>
            <span className="text-2xl text-purple-500">+</span>
          </span>
          <span className="mt-2 block text-xl">Hours of content</span>
        </div>
      </div>
    </div>
  )
}
