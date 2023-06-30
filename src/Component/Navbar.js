import React from 'react';

function Navbar() {
  return (
    <div className='relative'>
      <div className='bg-zinc-400'>
        <nav className="flex sm:justify-center space-x-10">
          <img src='http://surl.li/ipnrz' alt='logo' className='h-20'></img>
          {[
            ['Home', '/dashboard'],
            ['Facilities', '/team'],
            ['About Us', '/projects'],
            ['Reservation', '/reports'],
          ].map(([title, url]) => (
            <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium text-2xl hover:bg-slate-100 hover:text-slate-900 flex items-center justify-center" key={url}>{title}</a>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
