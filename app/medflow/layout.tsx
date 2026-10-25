'use client'
import '../globals.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  { href: '/medflow/dashboard',   icon: 'ðŸ–¥ï¸', label: 'Command Center' },
  { href: '/medflow/temperature', icon: 'ðŸŒ¡ï¸', label: 'Temperature'     },
  { href: '/medflow/inventory',   icon: 'ðŸ’Š', label: 'Inventory'       },
  { href: '/medflow/coldchain',   icon: 'â„ï¸', label: 'Cold Chain'      },
  { href: '/medflow/compliance',  icon: 'ðŸ“‹', label: 'Compliance'      },
  { href: '/medflow/compounding', icon: 'âš—ï¸', label: 'Compounding'     },
  { href: '/medflow/cleanrooms',  icon: 'ðŸ§ª', label: 'Cleanrooms'      },
  { href: '/medflow/hospital',    icon: 'ðŸ¥', label: 'Hospital'        },
  { href: '/medflow/ai-panel',    icon: 'ðŸ¤–', label: 'AI Panel'        },
]

function Sidebar() {
  const path = usePathname()
  return (
    <aside style={{ width: 220, minHeight: '100vh', background: '#0B1826', borderRight: '1px solid #152840', display: 'flex', flexDirection: 'column', flexShrink: 0, position: 'sticky', top: 0 }}>
      {/* Logo */}
      <div style={{ padding: '20px 16px 16px', borderBottom: '1px solid #152840' }}>
        <Link href="/medflow/dashboard" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg,#0A6E68,#14D2C2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>âš•</div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 800, color: '#EEF6FB', fontFamily: "'Outfit',sans-serif", letterSpacing: -0.3 }}>MedicalFlow OS</div>
            <div style={{ fontSize: 9, color: '#14D2C2', fontFamily: "'Geist Mono',monospace", letterSpacing: 1 }}>â— LIVE</div>
          </div>
        </Link>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '12px 10px', display: 'flex', flexDirection: 'column', gap: 2 }}>
        {NAV.map(item => {
          const active = path === item.href || path.startsWith(item.href + '/')
          return (
            <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', borderRadius: 8, background: active ? 'rgba(20,210,194,0.1)' : 'transparent', border: `1px solid ${active ? 'rgba(20,210,194,0.3)' : 'transparent'}`, transition: 'all 0.15s', cursor: 'pointer' }}>
                <span style={{ fontSize: 15 }}>{item.icon}</span>
                <span style={{ fontSize: 12.5, fontWeight: active ? 700 : 400, color: active ? '#14D2C2' : '#4A7090', fontFamily: "'Outfit',sans-serif", whiteSpace: 'nowrap' }}>{item.label}</span>
                {active && <div style={{ marginLeft: 'auto', width: 4, height: 4, borderRadius: '50%', background: '#14D2C2' }} />}
              </div>
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div style={{ padding: '12px 16px', borderTop: '1px solid #152840' }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 11 }}>â†</span>
          <span style={{ fontSize: 11, color: '#4A7090', fontFamily: "'Geist Mono',monospace", letterSpacing: 0.5 }}>Back to Suite</span>
        </Link>
      </div>
    </aside>
  )
}

export default function MedFlowLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#14D2C2" />
      </head>
      <body style={{ margin: 0, padding: 0, background: '#070F18', display: 'flex' }}>
        <Sidebar />
        <main style={{ flex: 1, minHeight: '100vh', overflow: 'auto' }}>
          {children}
        </main>
      </body>
    </html>
  )
}
