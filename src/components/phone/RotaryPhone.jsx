'use client'
import Phone from './Phone'
import SpeedDialer from './SpeedDialer'
import { PhoneProvider } from './PhoneContext'

export default function RotaryPhone() {
  return (
    <div className="rotary-phone">
      <section className="section">
        <div className="container">
          <header className="header">
            <h1>Make A Call</h1>
          </header>
          <div className="row">
            <PhoneProvider>
              <Phone />
              <SpeedDialer />
            </PhoneProvider>
          </div>
        </div>
      </section>
    </div>
  )
}
