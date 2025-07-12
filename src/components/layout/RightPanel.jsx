import React from 'react';

const RightPanel = () => {
  return (
    // Sağ panelin ana konteyneri
    <aside className="w-80 flex-shrink-0 bg-white p-6 flex flex-col space-y-8">
      
      {/* Bildirimler Bölümü */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-4">Bildirimler</h3>
        <div className="space-y-3">
          {/* Buraya bildirim listesi gelecek */}
          <p className="text-sm text-gray-500">Yeni bildirim yok.</p>
        </div>
      </div>

      {/* Son İşlemler Bölümü */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-4">Son İşlemler</h3>
        <div className="space-y-3">
          {/* Buraya son işlemler listesi gelecek */}
          <p className="text-sm text-gray-500">İşlem bulunamadı.</p>
        </div>
      </div>

      {/* Hekimler Bölümü */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-4">Hekimler</h3>
        <div className="space-y-3">
          {/* Buraya hekimler listesi gelecek */}
          <p className="text-sm text-gray-500">Hekim bulunamadı.</p>
        </div>
      </div>

    </aside>
  );
};

export default RightPanel;