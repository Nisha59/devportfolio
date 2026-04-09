export default function Hero() {
  return (
    <section style={{
      minHeight:'100vh', display:'flex', alignItems:'center',
      padding:'0 2rem', paddingTop:'80px', maxWidth:'900px', margin:'0 auto'
    }}>
      <div>
        <p style={{color:'var(--accent)', fontFamily:'Fira Code', marginBottom:'1rem'}}>
          Hi, my name is Nisha Chavan
        </p>
        <h1 style={{fontSize:'clamp(2.5rem, 8vw, 5rem)', fontWeight:700, lineHeight:1.1, marginBottom:'1rem'}}>
          M.Sc. Artificial Intelligence<br />
          <span style={{color:'var(--muted)'}}>Turning ideas into</span><br />
          <span style={{color:'var(--accent2)'}}>real life products.</span>
        </h1>
        <p style={{color:'var(--muted)', maxWidth:'540px', fontSize:'1.1rem', marginBottom:'2rem'}}>
          I build things that think.
        </p>
        <div style={{display:'flex', gap:'1rem', flexWrap:'wrap'}}>
          <a href="#projects" style={{
            padding:'0.75rem 1.5rem', background:'transparent',
            border:'1px solid var(--accent)', color:'var(--accent)',
            borderRadius:'4px', textDecoration:'none', fontFamily:'Fira Code',
            fontSize:'0.9rem', transition:'all 0.2s'
          }}>View Projects</a>
          <a href="#contact" style={{
            padding:'0.75rem 1.5rem', background:'var(--accent)',
            color:'var(--bg)', borderRadius:'4px', textDecoration:'none',
            fontWeight:600, fontSize:'0.9rem', transition:'all 0.2s'
          }}>Get In Touch</a>
        </div>
      </div>
    </section>
  )
}