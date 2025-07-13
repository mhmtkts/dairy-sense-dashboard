import React, { useState } from 'react';
import Popup from '../dashboard/Popup';
import { PiBugBeetle, PiBroadcast  } from "react-icons/pi";
import { LiaUser } from "react-icons/lia";

const ListItem = ({ icon, imageUrl, title, subtitle, onClick, iconBgColor }) => (
  <div
    className="flex items-center gap-3 p-1.5 rounded-lg hover:bg-gray-100 cursor-pointer"
    onClick={() => onClick(title)}
  >
    {imageUrl ? (
      <img src={imageUrl} alt={title} className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
    ) : (
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${iconBgColor}`}>
        {icon}
      </div>
    )}
    
    <div>
      <p className="font-medium text-gray-800 text-xs">{title}</p>
      <p className="text-[11px] text-gray-500">{subtitle}</p>
    </div>
  </div>
);

const TimelineItem = ({ imageUrl, title, subtitle, onClick, isLast }) => (
  <div 
    className="flex items-start gap-3 p-1.5 rounded-lg hover:bg-gray-100 cursor-pointer"
    onClick={() => onClick(title)}
  >
    <div className="relative flex flex-col items-center flex-shrink-0">
      <img src={imageUrl} alt={title} className="w-8 h-8 rounded-full object-cover z-10" />
      {!isLast && (
        <div className="absolute top-8 h-1/2 mt-1 w-px bg-gray-200"></div>
      )}
    </div>
    
    <div className="pt-0.5">
      <p className="font-medium text-gray-800 text-xs">{title}</p>
      <p className="text-[11px] text-gray-500">{subtitle}</p>
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

  const notifications = [
    { id: 1, icon: <PiBugBeetle size={18} />, title: 'Veri Girişi Yapılmamış', subtitle: 'Bugün', iconBgColor: 'bg-[#ECEEFB]' },
    { id: 2, icon: <LiaUser size={18} />, title: '4 Yeni Kızgınlık', subtitle: '59 dakika önce', iconBgColor: 'bg-[#E7F1FD]' },
    { id: 3, icon: <PiBugBeetle size={18} />, title: '2 Kayıtsız Tasma Algılandı', subtitle: '12 saat önce', iconBgColor: 'bg-[#ECEEFB]' },
    { id: 4, icon: <PiBroadcast size={18} />, title: '4 Tohumlama Yapıldı', subtitle: 'Delay için tıklayınız...', iconBgColor: 'bg-[#E7F1FD]' },
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
      <aside className="flex-shrink-0 bg-white p-6 flex flex-col space-y-6 border-l border-gray-200 overflow-y-auto">
        
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
            {recentActions.map((item, index) => (
              <TimelineItem 
                key={item.id} 
                {...item} 
                onClick={handleItemClick}
                isLast={index === recentActions.length - 1}
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