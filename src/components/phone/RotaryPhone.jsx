'use client'
import Phone from './Phone'
import SpeedDialer from './SpeedDialer'
import { PhoneProvider } from '@/context/PhoneContext'

export default function RotaryPhone() {
  return (
    <section className="section">
      <div className="container">
        <header className="header--phone">
          <h1>Make A Call</h1>
        </header>
        <div className="phone">
          <PhoneProvider>
            <Phone />
            <SpeedDialer />
          </PhoneProvider>
        </div>
      </div>
    </section>
  )
}
