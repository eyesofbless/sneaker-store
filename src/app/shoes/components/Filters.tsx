const Filters = () => {
  return (
      <div>
          <select
              className="
              text-[13px]
              sm:text-[16px]
              p-2
              rounded-lg
              border-[1px]
              border-gray-400
              bg-white
              cursor-pointer">
              <option>Дата поступления</option>
              <option selected>Цена (по возрастанию)</option>
              <option>Цена (по убыванию)</option>
          </select>
      </div>
  )
}

export default Filters