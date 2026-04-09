const skills = [
  { cat: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'] },
  { cat: 'Backend', items: ['Python', 'FastAPI', 'Node.js', 'REST APIs'] },
  { cat: 'DevOps', items: ['Docker', 'GitHub Actions', 'AWS'] },
  { cat: 'Databases', items: ['MySQL', 'MongoDB'] },
  { cat:  'AI & Machine Learning', items: ["LLMs & AI Agents", "RAG & Knowledge Retrieval", "Prompt Engineering", "Model Evaluation", "Fine-tuning "]},
  { cat:   'Frameworks & Libraries', items: ["LangChain", "OpenAI ", "ChromaDB & FAISS", "Hugging Face & Pydantic"]},
]

export default function Skills() {
  return (
    <section id="skills" style={{padding:'6rem 2rem', maxWidth:'900px', margin:'0 auto'}}>
      <h2 style={{fontFamily:'Fira Code', color:'var(--accent)', marginBottom:'3rem', fontSize:'1.8rem'}}>
        // skills
      </h2>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:'1.5rem'}}>
        {skills.map(({cat, items}) => (
          <div key={cat} style={{
            background:'var(--surface)', border:'1px solid var(--border)',
            borderRadius:'8px', padding:'1.5rem'
          }}>
            <h3 style={{color:'var(--accent2)', marginBottom:'1rem', fontSize:'0.9rem',
              fontFamily:'Fira Code', textTransform:'uppercase', letterSpacing:'0.1em'}}>
              {cat}
            </h3>
            {items.map(i => (
              <div key={i} style={{
                color:'var(--muted)', fontSize:'0.95rem', padding:'0.3rem 0',
                borderBottom:'1px solid var(--border)'
              }}>{i}</div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}