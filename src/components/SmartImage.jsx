import { useState } from 'react'

function SmartImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative w-full h-full">
      {/* placeholder */}
      {!loaded && (
        <div className="absolute inset-0 bg-stone-200 animate-pulse" />
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover object-center transition-all duration-700 ${
          loaded
            ? 'opacity-100 blur-0 scale-100'
            : 'opacity-0 blur-sm scale-105'
        }`}
      />
    </div>
  )
}

export default SmartImage
