export default function Contact() {
  return (
    <section id="contact" style={{
      padding:'6rem 2rem', maxWidth:'600px', margin:'0 auto', textAlign:'center'
    }}>
      <h2 style={{fontFamily:'Fira Code', color:'var(--accent)', marginBottom:'1rem', fontSize:'1.8rem'}}>
        // nisha.damu.chavan@gmail.com
      </h2>
      <p style={{color:'var(--muted)', marginBottom:'2rem', fontSize:'1.1rem'}}>
        Open to new opportunities. Whether you have a question or just want to say hi, 
        my inbox is always open!
      </p>
      <a href="mailto:you@email.com" style={{
        padding:'1rem 2rem', border:'1px solid var(--accent)',
        color:'var(--accent)', borderRadius:'4px', textDecoration:'none',
        fontFamily:'Fira Code', fontSize:'1rem'
      }}>Say Hello</a>
    </section>
  )
}