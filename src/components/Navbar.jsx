import React from 'react'
import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { NavLink } from "react-router"

function Navbar() {
  return (
    <section className='mt-10 w-43'>
        <Menubar className=''>
            <MenubarMenu className="">
                <MenubarTrigger><NavLink to="/santri" >Daftar</NavLink></MenubarTrigger>
                <MenubarTrigger><NavLink to="/santri/nilai">Nilai</NavLink></MenubarTrigger>
                <MenubarTrigger><NavLink to="/santri/absensi">Absensi</NavLink></MenubarTrigger>
            </MenubarMenu>
        </Menubar>
    </section>
  )
}

export default Navbar