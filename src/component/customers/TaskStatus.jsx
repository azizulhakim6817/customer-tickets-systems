const TaskStatus = ({
  taskStatus,
  completeHandler,
  complete,
  data,
  setData,
}) => {
  return (
    <div>
      {taskStatus.map((item, i) => (
        <div key={i} className=" mt-2 rounded-sm bg-white shadow-xl p-2">
          <div>
            <h2 className="font-semibold text-[16px] mb-2">{item.title}</h2>
            <button
              type="button"
              onClick={() => completeHandler(item, data, setData)}
              className="btn w-full text-white bg-[#02A53B]"
            >
              Complete
            </button>
          </div>
        </div>
      ))}

      {/* Resolved Tasks */}
      <div className="rounded-sm mt-6 p-2 bg-white">
        <h2 className="font-semibold text-xl mb-2">Resolved Tasks</h2>
        {complete.length === 0 ? (
          <p>No resolved tasks yet.</p>
        ) : (
          complete.map((item) => (
            <div
              key={item.id}
              className="bg-green-50 py-2 px-3 mb-2 rounded shadow"
            >
              <h3 className="font-medium text-[14px] md-text[12px] lg:text-[16px]">
                {item.title}
              </h3>
              <span className="text-green-600 text-[14px] md:text-[14px] font-semibold">
                ✓ Complete
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskStatus;
