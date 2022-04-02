import React from 'react'

export default function CourseHeaderRecord({ details }) {
  const sentences = details.description.split('.')
  sentences.splice(sentences.length - 1, 1)

  return (
    <div className="flex flex-col items-center bg-gray-200 py-20 px-10">
      <h1 className="text-center text-2xl font-bold text-gray-600">
        {details.smallTitle}
        <span className="mb-10 block text-6xl font-bold text-gray-900">
          {details.bigTitle}
        </span>
      </h1>

      {sentences.map((sentences, index) => (
        <p key={index} className="max-w-lg text-lg text-gray-500">
          {sentences}.
        </p>
      ))}

      <a
        href="#Pricing"
        className="mt-8 rounded-md bg-yellow-300 py-3 px-4 text-xl text-gray-800 hover:bg-yellow-400"
      >
        {details.buttonText}
      </a>
    </div>
  )
}
