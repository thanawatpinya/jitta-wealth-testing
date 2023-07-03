const ButtonGroup = ({ items }) => {
  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      {items.map((item, i) => (
        <button
          key={item.title}
          type="button"
          className={
            `px-4 py-2 text-sm text-gray-900 bg-white border border-gray-200 ${i === 0 && "rounded-l-lg"} ${i === items.length - 1 && "rounded-r-md"} hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 dark:border-gray-300 dark:text-gray-600 dark:hover:text-blue-500 dark:hover:bg-white dark:focus:border-blue-400 dark:focus:text-blue-500`
            }
          >
          {item.title}
        </button>
      ))}
    </div>
  )
}

export default ButtonGroup