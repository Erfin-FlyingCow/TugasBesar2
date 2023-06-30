import React from 'react';

function Footer() {
  return (
    <div className="bg-zinc-400">
      <div className="container mx-auto py-4 text-white">
        <div className="flex flex-row justify-between">
          <div>
            <div className="text-xs font-medium">Sosmed Kami</div>
            <div className="flex">
              <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
              <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
              <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <div className="bg-zinc-400">
                <div className="px-4 py-2">
                  <div>Alamat Kami:</div>
                  <div>Jl. Kapten Harun Kabir No.724,</div>
                  <div>Cibeureum, Kec. Cisarua,</div>
                  <div>Kabupaten Bogor, Jawa Barat 16750</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">&copy; Taman Safari Bogor 2023</div>
      </div>
    </div>
  );
}

export default Footer;
