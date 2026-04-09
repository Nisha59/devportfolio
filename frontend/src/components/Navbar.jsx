export default function Navbar() {
  return (
    <nav style={{
      position:'fixed', top:0, width:'100%', zIndex:100,
      background:'rgba(10,10,15,0.85)', backdropFilter:'blur(12px)',
      borderBottom:'1px solid var(--border)', padding:'1rem 2rem',
      display:'flex', justifyContent:'space-between', alignItems:'center'
    }}>
      <span style={{fontFamily:'Fira Code', color:'var(--accent)', fontWeight:600}}>
        &lt;Nisha Chavan/&gt;
      </span>
      <div style={{display:'flex', gap:'2rem'}}>
        {['skills','projects','contact'].map(s => (
          <a key={s} href={`#${s}`} style={{
            color:'var(--muted)', textDecoration:'none',
            textTransform:'capitalize', fontSize:'0.9rem',
            transition:'color 0.2s'
          }}
          onMouseEnter={e=>e.target.style.color='var(--text)'}
          onMouseLeave={e=>e.target.style.color='var(--muted)'}
          >{s}</a>
        ))}
      </div>
    </nav>
  )
}