const projects = [
  {
    title: 'AI Digital Twin — Personal Portfolio Agent',
    desc: 'A personal AI digital twin powered by AWS Bedrock and LangChain capable of contextual multi-turn dialogue about experience, skills, and education. Features MCP-driven multi-agent workflows, structured tool calling, and persistent conversational memory for coherent, hallucination-resistant responses across long sessions.',
    tags: ["AWS Bedrock", "LangChain", "MCP"],
    github: 'https://github.com/Nisha59/twin',
    live: '#'
  },
  {
    title: 'AI-Powered Career Roadmap Generator ',
    desc: 'A full-stack web app that generates personalized weekly career roadmaps using structured LLM pipelines. Built with Next.js and FastAPI featuring JWT authentication, real-time SSE streaming for progressive content delivery, and structured prompt validation for reliable outputs. Containerized with Docker and deployed via GitHub Actions CI/CD pipelines. ',
    tags: ["Next.js", "FastAPI", "Docker", "SSE"],
    github: 'https://github.com/Nisha59/CareerPilot-AI',
    live: '#'
  },
  {
    title: 'AI Knowledge Assistant',
    desc: 'Production-grade agentic RAG pipeline for enterprise document querying. Semantic chunking, ChromaDB vector storage, multi-query retrieval, and LLM reranking — all served via FastAPI with Pydantic-validated outputs and automated evaluation dashboards tracking MRR, nDCG, and LLM-as-Judge metrics.',
    tags: ["LangChain", "ChromaDB", "FastAPI"],
    github: 'https://github.com/Nisha59/AI-Knowledge-Assistant-Agentic-RAG-Platform',
    // live: '#'
  },
  
  {
    title: 'Multi-Agent Financial Intelligence Platform',
    desc: 'An autonomous multi-agent AI platform for financial analysis — architected with explicit A2A communication contracts across planning, execution, and reporting agents. Features a centralised MCP-style tool-routing layer, RAG pipelines from S3 through SageMaker into Aurora Serverless, and an LLM-driven validation layer ensuring deterministic, trustworthy outputs in high-stakes financial workflows. ',
    tags: ["AWS SageMaker", "Multi-Agent", "RAG", "MCP"],
    github: 'https://github.com/Nisha59/alex-finance-agent',
    // live: '#'
  },
  
]

export default function Projects() {
  return (
    <section id="projects" style={{padding:'6rem 2rem', maxWidth:'900px', margin:'0 auto'}}>
      <h2 style={{fontFamily:'Fira Code', color:'var(--accent)', marginBottom:'3rem', fontSize:'1.8rem'}}>
        // projects
      </h2>
      <div style={{display:'grid', gap:'1.5rem'}}>
        {projects.map(({title, desc, tags, github, live}) => (
          <div key={title} style={{
            background:'var(--surface)', border:'1px solid var(--border)',
            borderRadius:'8px', padding:'2rem', transition:'border-color 0.2s'
          }}>
            <h3 style={{fontSize:'1.3rem', marginBottom:'0.75rem'}}>{title}</h3>
            <p style={{color:'var(--muted)', marginBottom:'1.25rem'}}>{desc}</p>
            <div style={{display:'flex', gap:'0.5rem', flexWrap:'wrap', marginBottom:'1.25rem'}}>
              {tags.map(t => (
                <span key={t} style={{
                  background:'rgba(110,231,183,0.1)', color:'var(--accent)',
                  padding:'0.2rem 0.6rem', borderRadius:'4px',
                  fontSize:'0.8rem', fontFamily:'Fira Code'
                }}>{t}</span>
              ))}
            </div>
            <div style={{display:'flex', gap:'1rem'}}>
              <a href={github} style={{color:'var(--accent2)', fontSize:'0.9rem'}}>GitHub →</a>
              {/* <a href={live} style={{color:'var(--accent2)', fontSize:'0.9rem'}}>Live →</a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}