export default function Footer() {
  return (
    <footer
      className="text-center py-12 px-6 relative z-10"
      style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
    >
      <div
        className="font-mono text-[13px] tracking-[4px] uppercase mb-3"
        style={{ color: '#00d4ff', opacity: 0.6 }}
      >
        Reverse Singularity
      </div>
      <div className="text-xs" style={{ color: '#333' }}>
        © {new Date().getFullYear()} — Advanced Simulation Projects
      </div>
    </footer>
  )
}
