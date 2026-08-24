import React from 'react'
import { useParams, NavLink } from 'react-router'
import { ArrowLeft } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function SantriDetail() {
  
  const { id } = useParams()

  return (
    <section className="mt-6">
      <NavLink
        to="/santri"
        className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 mb-4 transition"
      >
        <ArrowLeft size={14} /> Kembali ke Daftar Santri
      </NavLink>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">Detail Santri</CardTitle>
          <CardDescription>
            Menampilkan data santri dengan ID: <span className="font-semibold text-slate-900">{id}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-600">
            Ini adalah halaman detail khusus untuk santri dengan ID <strong>#{id}</strong>.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}