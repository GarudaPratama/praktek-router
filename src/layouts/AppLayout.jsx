import { Outlet } from 'react-router';
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar';
import AppSidebar from '@/components/AppSidebar';
import '@/styles/index.css';

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        {/* Top bar with trigger */}
        <header className='flex h-14 shrink-0 items-center gap-3 border-b border-border px-4 bg-background/95 backdrop-blur sticky top-0 z-40'>
          <SidebarTrigger className='-ml-1' />
          <div className='h-5 w-px bg-border' />
          <span className='text-sm font-medium text-muted-foreground'>
            SantriApp
          </span>
        </header>

        {/* Page content */}
        <main className='flex-1 p-6'>
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}