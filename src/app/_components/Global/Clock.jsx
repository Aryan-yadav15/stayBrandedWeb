import { useState, useEffect } from "react"

function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="relative w-64 h-64 mx-auto my-12">
      <div className="absolute inset-0 rounded-full border-4 border-gray-800 bg-black shadow-lg">
        {Array.from({ length: 12 }).map((_, i) => {
          const letter = "-STAYBRANDED"[i] || ""
          const angle = (i * 30 - 90) * (Math.PI / 180)
          return (
            <div
              key={i}
              className="absolute text-yellow-400 font-bold text-lg"
              style={{
                left: `${50 + Math.cos(angle) * 42}%`,
                top: `${50 + Math.sin(angle) * 42}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {letter}
            </div>
          )
        })}
        {/* Clock Hands */}
        <div
          className="absolute w-1 h-20 bg-white origin-bottom rounded-full"
          style={{
            left: "50%",
            bottom: "50%",
            transform: `rotate(${time.getHours() * 30 + time.getMinutes() * 0.5}deg)`,
          }}
        />
        <div
          className="absolute w-1 h-28 bg-yellow-400 origin-bottom rounded-full"
          style={{
            left: "50%",
            bottom: "50%",
            transform: `rotate(${time.getMinutes() * 6}deg)`,
          }}
        />
        {/* Center Dot */}
        <div
          className="absolute w-4 h-4 bg-yellow-400 rounded-full"
          style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        />
      </div>
    </div>
  )
}

export default Clock

