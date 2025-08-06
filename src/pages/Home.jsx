import React from 'react'
import MyLink from '../react-router/MyLink'

export default function Home() {
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', padding: '24px' }}>
        {[...Array(20)].map((_, i) => (
          <MyLink
            key={i}
            to={`/user/${i + 1}`}
            style={{
              display: 'block',
              background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
              borderRadius: '16px',
              boxShadow: '0 4px 16px rgba(60,72,88,0.08)',
              padding: '32px 24px',
              textDecoration: 'none',
              color: '#22223b',
              transition: 'transform 0.15s, box-shadow 0.15s',
              fontFamily: 'Segoe UI, sans-serif',
              fontWeight: 500,
              fontSize: '1.1rem',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '12px', color: '#4f46e5' }}>👤</div>
            <div style={{ marginBottom: '8px' }}>User {i + 1}</div>
            <div style={{ fontSize: '0.95rem', color: '#64748b' }}>This is a beautiful card for user {i + 1}.</div>
          </MyLink>
        ))}
      </div>
    </div>
  )
}
