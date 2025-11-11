import Sidebar from '@/components/ui/Sidebar';
import React from 'react';

const Layout = () => {
    return (
        <div>
               {/* Left sidebar (desktop). Sidebar is a client component and may include its own mobile toggler. */}
          <aside className="hidden lg:block lg:w-72 border-r bg-white">
           <Sidebar/>
          </aside>
        </div>
    );
}

export default Layout;
