import { useEffect, useRef } from 'react'

interface Star {
  x: number; y: number; r: number; o: number; speed: number; phase: number
}
interface Node {
  x: number; y: number; vx: number; vy: number; r: number
}

export default function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    // Non-null assertion is safe: we only reach this after the canvas guard above,
    // and '2d' context is universally supported in modern browsers.
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

    let rafId: number
    let W = 0, H = 0
    let stars: Star[] = []
    let nodes: Node[] = []
    let t = 0

    function resize() {
      W = canvas!.width  = window.innerWidth
      H = canvas!.height = window.innerHeight
      initStars()
      initNodes()
    }

    function initStars() {
      stars = Array.from({ length: 180 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.2 + 0.2,
        o: Math.random() * 0.6 + 0.2,
        speed: Math.random() * 0.015 + 0.005,
        phase: Math.random() * Math.PI * 2,
      }))
    }

    function initNodes() {
      nodes = Array.from({ length: 28 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.5 + 0.5,
      }))
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)

      const grad = ctx.createRadialGradient(W / 2, H / 2, H * 0.1, W / 2, H / 2, H * 0.9)
      grad.addColorStop(0, 'transparent')
      grad.addColorStop(1, 'rgba(2,2,10,0.6)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, W, H)

      for (const s of stars) {
        const op = s.o * (0.7 + 0.3 * Math.sin(t * s.speed + s.phase))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${op})`
        ctx.fill()
      }

      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy
        if (n.x < 0) n.x = W; if (n.x > W) n.x = 0
        if (n.y < 0) n.y = H; if (n.y > H) n.y = 0
      }

      const maxDist = 200
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < maxDist) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(0,212,255,${(1 - d / maxDist) * 0.12})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      for (const n of nodes) {
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0,212,255,0.35)'
        ctx.fill()
      }

      t++
      rafId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none"
    />
  )
}
