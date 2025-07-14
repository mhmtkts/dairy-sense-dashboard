const statusData = [
  { title: 'Tohumlama', filledSegments: 2 },
  { title: 'Sağım Süresi', filledSegments: 2 },
  { title: 'Tedaviler', filledSegments: 1 },
  { title: 'Protokoller', filledSegments: 3 },
  { title: 'Veri Girişi', filledSegments: 1 },
  { title: 'Kızgınlıklar', filledSegments: 2 },
];

const SegmentedProgressBar = ({ filled, total = 3 }) => {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`h-1.5 w-4 rounded-full ${
            index < filled ? 'bg-gray-700' : 'bg-gray-200'
          }`}
        />
      ))}
    </div>
  );
};

const StatusListItem = ({ title, filledSegments }) => (
  <div className="flex items-center justify-between py-3">
    <p className="text-sm font-medium text-gray-600">{title}</p>
    <SegmentedProgressBar filled={filledSegments} />
  </div>
);

const StatusList = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm h-full flex flex-col">
      <div className="mb-4">
        <h3 className="font-semibold text-gray-800 text-lg">Çiftlik Başarı Durumu</h3>
      </div>

      <div className="flex-grow flex flex-col space-y-1">
        {statusData.map((item, index) => (
          <StatusListItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default StatusList;