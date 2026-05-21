import type { ProjectStatus } from '../../data/projects'

interface BadgeProps {
  status: ProjectStatus
}

export default function Badge({ status }: BadgeProps) {
  if (status === 'live') {
    return (
      <span
        className="font-mono text-[10px] tracking-[1.5px] uppercase px-2.5 py-1 rounded-full"
        style={{
          color: '#00ff88',
          background: 'rgba(0,255,136,0.08)',
          border: '1px solid rgba(0,255,136,0.2)',
        }}
      >
        Live
      </span>
    )
  }

  return (
    <span
      className="font-mono text-[10px] tracking-[1.5px] uppercase px-2.5 py-1 rounded-full"
      style={{
        color: '#7b2fff',
        background: 'rgba(123,47,255,0.08)',
        border: '1px solid rgba(123,47,255,0.2)',
      }}
    >
      Coming Soon
    </span>
  )
}
