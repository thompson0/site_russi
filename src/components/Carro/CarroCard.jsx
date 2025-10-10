function CarroCard({ modelo, foto, ano }) {
  return (
    <div className="group w-full h-80 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden">
      <div className="flex-1 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <img
          src={foto}
          alt={modelo}
          className="max-h-44 w-full object-contain p-3 group-hover:scale-105 transition-transform duration-300"
        />
      </div>


      <div className="p-4 text-center border-t border-gray-100 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white truncate">
          {modelo}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Ano: <span className="font-medium text-gray-900 dark:text-gray-200">{ano}</span>
        </p>
      </div>
    </div>
  );
}

export default CarroCard;
