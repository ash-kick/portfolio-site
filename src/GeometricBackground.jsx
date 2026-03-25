import { useEffect, useRef } from 'react'

export default function GeometricBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const circles = []
    const count = 25

    for (let i = 0; i < count; i++) {
      circles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: 4 + Math.random() * 40,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: 0.03 + Math.random() * 0.07,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      circles.forEach(circle => {
        ctx.beginPath()
        ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(124, 58, 237, ${circle.opacity})`
        ctx.fill()

        circle.x += circle.vx
        circle.y += circle.vy

        if (circle.x + circle.r < 0) circle.x = canvas.width + circle.r
        if (circle.x - circle.r > canvas.width) circle.x = -circle.r
        if (circle.y + circle.r < 0) circle.y = canvas.height + circle.r
        if (circle.y - circle.r > canvas.height) circle.y = -circle.r
      })

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="geo-canvas" aria-hidden="true" />
}
