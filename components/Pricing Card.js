import React from 'react'

export default function PricingCard({ details }) {
  if (details.featured) {
    return (
      <div className="w-full max-w-sm rounded-lg border-4 border-yellow-400 bg-white p-6">
        <h3 className="mb-4 text-xl uppercase text-purple-500">
          {details.title}
        </h3>
        <p className="mb-10 text-6xl font-bold text-purple-500">
          {details.isFree ? (
            <span>FREE</span>
          ) : (
            <span>${details.priceInCent / 100}</span>
          )}

          {details.priceSuffix && (
            <span className="m-1 text-lg">{details.priceSuffix}</span>
          )}
        </p>

        <ul>
          {details.description.split('*').map((bullet, index) => (
            <li className="my-2 text-sm text-purple-500" key={index}>
              {bullet}
            </li>
          ))}
        </ul>

        <button className="mx-auto mt-6 mb-4 block w-full rounded-md bg-purple-400 px-4 py-2 text-white">
          {details.buttonText}
        </button>

        {details.finePrint && (
          <small className="block text-purple-500">{details.finePrint}</small>
        )}
      </div>
    )
  } else {
    return (
      <div className="w-full max-w-sm rounded-lg bg-purple-500 p-6">
        <h3 className="mb-4 text-xl uppercase text-white">{details.title}</h3>
        <p className="mb-10 text-6xl font-bold text-white">
          {details.isFree ? (
            <span>FREE</span>
          ) : (
            <span>${details.priceInCent / 100}</span>
          )}

          {details.priceSuffix && (
            <span className="m-1 text-lg">{details.priceSuffix}</span>
          )}
        </p>

        <ul>
          {details.description.split('*').map((bullet, index) => (
            <li className="my-2 text-sm text-purple-100" key={index}>
              {bullet}
            </li>
          ))}
        </ul>

        <button className="mx-auto mt-6 mb-4 block w-full rounded-md bg-purple-400 px-4 py-2 text-white">
          {details.buttonText}
        </button>

        {details.finePrint && (
          <small className="block text-purple-200">{details.finePrint}</small>
        )}
      </div>
    )
  }
}
