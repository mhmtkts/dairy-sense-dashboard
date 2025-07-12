import React, { useState } from 'react';
import Popup from '../dashboard/Popup'; // Popup dosyanızın yolu doğruysa bu satırı değiştirmeyin
import { BsBell, BsCheckCircle, BsPersonCircle, BsExclamationCircle } from 'react-icons/bs';
import { PiBugBeetle, PiBroadcast  } from "react-icons/pi"; // Bu ikon kullanılmıyor ama kalabilir
import { LiaUser } from "react-icons/lia";

// Genel liste elemanı (Bildirimler ve Hekimler için)
const ListItem = ({ icon, imageUrl, title, subtitle, onClick }) => (
  <div
    className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
    onClick={() => onClick(title)}
  >
    {imageUrl ? (
      <img src={imageUrl} alt={title} className="w-9 h-9 rounded-full object-cover flex-shrink-0" />
    ) : (
      <div className={`mt-1`}>{icon}</div>
    )}
    
    <div>
      <p className="font-medium text-gray-800 text-sm">{title}</p>
      <p className="text-xs text-gray-500">{subtitle}</p>
    </div>
  </div>
);

// 1. "Son İşlemler" için özel Timeline elemanı
const TimelineItem = ({ imageUrl, title, subtitle, onClick, isLast }) => (
  <div 
    className="flex items-start gap-4 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
    onClick={() => onClick(title)}
  >
    {/* Dikey çizgi ve profil fotoğrafı için konteyner */}
    <div className="relative flex flex-col items-center flex-shrink-0">
      <img src={imageUrl} alt={title} className="w-9 h-9 rounded-full object-cover z-10" />
      {/* Eğer son eleman değilse, dikey çizgiyi çiz */}
      {!isLast && (
        <div className="absolute top-9 h-1/2 mt-1 w-px bg-gray-200"></div>
      )}
    </div>
    
    {/* Başlık ve alt başlık */}
    <div className="pt-1">
      <p className="font-medium text-gray-800 text-sm">{title}</p>
      <p className="text-xs text-gray-500">{subtitle}</p>
    </div>
  </div>
);


const RightPanel = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');

  const handleItemClick = (title) => {
    setPopupTitle(title);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  // --- Veriler aynı kalıyor ---
  const notifications = [
    { id: 1, icon: <PiBugBeetle size={20} className='bg-[#ECEEFB]' />, title: 'Veri Girişi Yapılmamış', subtitle: 'Bugün'},
    { id: 2, icon: <LiaUser size={20} className='bg-[#E7F1FD]'/>, title: '4 Yeni Kızgınlık', subtitle: '59 dakika önce' },
    { id: 3, icon: <PiBugBeetle size={20} className='bg-[#ECEEFB]' />, title: '2 Kayıtaz Tasma Algılandı', subtitle: '12 saat önce' },
    { id: 4, icon: <PiBroadcast size={20} className='bg-[#E7F1FD]'/>, title: '4 Tohumlama Yapıldı', subtitle: 'Delay için tıklayınız...' },
  ];

  const recentActions = [
    { id: 5, imageUrl: 'https://i.pravatar.cc/150?u=vet1', title: 'Gebelik Teşhisi: 24 Numara', subtitle: '2 saat önce' },
    { id: 6, imageUrl: 'https://i.pravatar.cc/150?u=vet2', title: 'Kuruya ayrılış: 242 Numara', subtitle: '5 saat önce' },
    { id: 7, imageUrl: 'https://i.pravatar.cc/150?u=system', title: 'Düşük bildirim: 2402', subtitle: '12 saat önce' },
    { id: 8, imageUrl: 'https://i.pravatar.cc/150?u=admin', title: '1 Yeni Hayvan Eklendi: 2991', subtitle: 'Dün' },
    { id: 9, imageUrl: 'https://i.pravatar.cc/150?u=vet3', title: 'Sürüden Çıkarıldı: 203', subtitle: '4 gün önce' },
  ];

  const vets = [
    { id: 10, imageUrl: 'https://i.pravatar.cc/150?u=enes', title: 'Enes', subtitle: 'Online' },
    { id: 11, imageUrl: 'https://i.pravatar.cc/150?u=furkan', title: 'Furkan', subtitle: 'Online' },
    { id: 12, imageUrl: 'https://i.pravatar.cc/150?u=murat', title: 'Murat', subtitle: 'Çevrimdışı' },
    { id: 13, imageUrl: 'https://i.pravatar.cc/150?u=ridvan', title: 'Rıdvan', subtitle: 'Çevrimdışı' },
    { id: 14, imageUrl: 'https://i.pravatar.cc/150?u=emrah', title: 'Emrah', subtitle: 'Online' },
  ];

  return (
    <>
      <aside className="w-80 flex-shrink-0 bg-white p-6 flex flex-col space-y-6 border-l border-gray-200 overflow-y-auto">
        
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Bildirimler</h3>
          <div className="space-y-1">
            {notifications.map(item => (
              <ListItem key={item.id} {...item} onClick={handleItemClick} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Son İşlemler</h3>
          <div className="space-y-1">
            {/* 2. "Son İşlemler" için yeni TimelineItem bileşenini kullanıyoruz */}
            {recentActions.map((item, index) => (
              <TimelineItem 
                key={item.id} 
                {...item} 
                onClick={handleItemClick}
                isLast={index === recentActions.length - 1} // Son eleman olup olmadığını kontrol et
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Hekimler</h3>
          <div className="space-y-1">
            {vets.map(item => (
              <ListItem key={item.id} {...item} onClick={handleItemClick} />
            ))}
          </div>
        </div>

      </aside>

      <Popup 
        isOpen={isPopupOpen} 
        onClose={handleClosePopup} 
        title={popupTitle} 
      />
    </>
  );
};

export default RightPanel;