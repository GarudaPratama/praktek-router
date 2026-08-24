import React from 'react'
import Navbar from '@/components/Navbar'
import { Outlet } from 'react-router'

export default function Santri() {
  return (
    <section>
      <h1 className="text-2xl font-bold">Santri</h1>
      <p className="text-gray-500 text-sm mt-2">Kelola data santri, nilai, dan absensi.</p>
      <Navbar className="mt-10" />

      <main className="mt-6">
        <Outlet />
      </main>
    </section>
  )
}