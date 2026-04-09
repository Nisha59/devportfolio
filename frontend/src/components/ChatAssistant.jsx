import { useState, useRef, useEffect } from 'react'
import axios from 'axios'

export default function ChatAssistant() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hey! I'm Nisha's portfolio assistant. I can tell you about her AI agents, RAG pipelines, AWS cloud work, or full stack projects. What would you like to know?" }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const send = async () => {
    if (!input.trim() || loading) return
    const userMsg = { role: 'user', content: input }
    const updated = [...messages, userMsg]
    setMessages(updated)
    setInput('')
    setLoading(true)

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updated.slice(1) }) // skip system greeting
      })

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let result = ''
      setMessages(prev => [...prev, { role: 'assistant', content: '' }])

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        result += decoder.decode(value)
        setMessages(prev => {
          const copy = [...prev]
          copy[copy.length - 1] = { role: 'assistant', content: result }
          return copy
        })
      }
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, could not reach the server.' }])
    }
    setLoading(false)
  }

  return (
    <>
      {/* Floating Button */}
      <button onClick={() => setOpen(!open)} style={{
        position:'fixed', bottom:'2rem', right:'2rem', zIndex:200,
        width:'56px', height:'56px', borderRadius:'50%',
        background:'var(--accent)', border:'none', cursor:'pointer',
        fontSize:'1.5rem', boxShadow:'0 4px 20px rgba(110,231,183,0.4)',
        transition:'transform 0.2s'
      }}>
        {open ? '✕' : '💬'}
      </button>

      {/* Chat Window */}
      {open && (
        <div style={{
          position:'fixed', bottom:'5.5rem', right:'2rem', zIndex:200,
          width:'360px', height:'480px', background:'var(--surface)',
          border:'1px solid var(--border)', borderRadius:'12px',
          display:'flex', flexDirection:'column', overflow:'hidden',
          boxShadow:'0 20px 60px rgba(0,0,0,0.5)'
        }}>
          {/* Header */}
          <div style={{
            padding:'1rem 1.25rem', borderBottom:'1px solid var(--border)',
            background:'var(--bg)', display:'flex', alignItems:'center', gap:'0.75rem'
          }}>
            <div style={{width:'10px',height:'10px',borderRadius:'50%',background:'var(--accent)'}}/>
            <span style={{fontWeight:600, fontSize:'0.95rem'}}>Portfolio Assistant</span>
          </div>

          {/* Messages */}
          <div style={{flex:1, overflowY:'auto', padding:'1rem', display:'flex', flexDirection:'column', gap:'0.75rem'}}>
            {messages.map((m, i) => (
              <div key={i} style={{
                alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                maxWidth:'85%',
                background: m.role === 'user' ? 'var(--accent2)' : 'var(--border)',
                color: m.role === 'user' ? 'white' : 'var(--text)',
                padding:'0.6rem 0.9rem', borderRadius:'10px',
                fontSize:'0.88rem', lineHeight:'1.5'
              }}>
                {m.content}
              </div>
            ))}
            {loading && (
              <div style={{alignSelf:'flex-start', color:'var(--muted)', fontSize:'0.85rem'}}>typing...</div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{padding:'0.75rem', borderTop:'1px solid var(--border)', display:'flex', gap:'0.5rem'}}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Ask about skills, projects..."
              style={{
                flex:1, background:'var(--bg)', border:'1px solid var(--border)',
                borderRadius:'6px', padding:'0.5rem 0.75rem', color:'var(--text)',
                outline:'none', fontSize:'0.88rem'
              }}
            />
            <button onClick={send} disabled={loading} style={{
              background:'var(--accent)', border:'none', borderRadius:'6px',
              padding:'0.5rem 1rem', cursor:'pointer', color:'var(--bg)', fontWeight:600
            }}>→</button>
          </div>
        </div>
      )}
    </>
  )
}