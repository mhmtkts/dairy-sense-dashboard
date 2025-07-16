const PlaceholderPage = ({ title }) => {
  return (
    <div className="flex items-center justify-center h-full bg-gray-50 rounded-lg">
      <h1 className="text-2xl font-bold text-gray-400">{title}</h1>
    </div>
  );
};

export default PlaceholderPage;