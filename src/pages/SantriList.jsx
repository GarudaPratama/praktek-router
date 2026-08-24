import React from 'react'
import Navbar from '@/components/Navbar'
import { NavLink } from 'react-router'
import { Outlet } from 'react-router'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function SantriList() {
  return (
    <section>
      
      <h1 className="text-2xl font-bold">Santri</h1>
      <p className='text-gray-500 text-sm mt-2'>Kelola data santri, nilai, dan absensi</p>
      <Navbar className='mt-10'/>
      
      <section className='mt-10'>
        <Card>
            <CardHeader className='mb-2'>
                <CardTitle className='text-xl font-bold'>Daftar Santri</CardTitle>
                <CardDescription>Klik pada kartu santri untuk melihat detail.</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>
                
                    <NavLink to="/santri/1">
                        <Card>
                            <CardHeader className='text-start'>
                                <CardTitle className='text-lg font-bold'>Albar Abdul Malik</CardTitle>
                                <CardDescription>XI A</CardDescription>
                            </CardHeader>
                        </Card>
                    </NavLink>
                
                
                    <NavLink to="/santri/2">
                        <Card>
                            <CardHeader className='text-start'>
                                <CardTitle className='text-lg font-bold'>Raffa Hitipeuw</CardTitle>
                                <CardDescription>XI B</CardDescription>
                            </CardHeader>
                        </Card>
                    </NavLink>
                
                
                    <NavLink to="/santri/3">
                        <Card>
                            <CardHeader className='text-start'>
                                <CardTitle className='text-lg font-bold'>Muhammad Akram Almair</CardTitle>
                                <CardDescription>XII</CardDescription>
                            </CardHeader>
                        </Card>
                    </NavLink>
                
            </CardContent>

        </Card> 
      </section>
      

      <main>
        <Outlet />
      </main>
    </section>
  )
}

export default SantriList