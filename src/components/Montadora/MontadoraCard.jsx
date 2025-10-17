function MontadoraCard({ nome, logo, id }) {
  return (
    <div className="w-96 h-80 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
      <div className="flex-1 flex items-center justify-center">
        <img src={logo} alt={nome} className="w-[50%] h-[50%] sm:w-[70%] sm:h-[70%] object-contain p-2" />
      </div>
      <div className="p-4 text-center">
        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {nome}
        </h5>
         
      </div>
    </div>
  );
}

export default MontadoraCard;
