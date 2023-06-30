import React from 'react';

function Navbar() {
  return (
    <div className='relative'>
    <div className='bg-zinc-400'>
      <nav className="flex sm:justify-center space-x-4">
      <img src='https://cdn.discordapp.com/attachments/1096614485231423568/1117715685905272952/kisspng-cattle-logo-clip-art-cow-and-calf-5b21b5d32a45e2.0585594515289358911732-removebg-preview.png' alt='sapi' width={50}></img>
        {[
          ['Home', '/dashboard'],
          ['Team', '/team'],
          ['Projects', '/projects'],
          ['Reports', '/reports'],
        ].map(([title, url]) => (
          <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
        ))}
      </nav>
    </div>
    </div>
  );
}

export default Navbar;
