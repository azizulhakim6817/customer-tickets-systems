import { use, useState } from "react";
import Customer from "./Customer";
import TaskStatus from "./TaskStatus";

const Customers = ({
  custApiData,
  handleClickCard,
  card,
  taskStatus,
  completeHandler,
  complete,
}) => {
  const initialData = use(custApiData);
  const [data, setData] = useState(initialData);

  return (
    <div>
      <div className="w-11/12 md:w-11/12 mb-8 mx-4  md:mx-auto cursor-pointer ">
        <div className="space-y-4 md:space-x-0 sm:flex md:flex-col-2 lg:flex gap-4 justify-between items-start">
          {/* Customers List */}
          <div>
            <h2 className=" font-semibold text-xl mb-2">Customer Tickets</h2>
            <div className="grid grid-cols md:grid-cols lg:grid-cols-2 gap-4 w-12/12">
              {data.map((customer) => (
                <Customer
                  key={customer.id}
                  customer={customer}
                  handleClickCard={handleClickCard}
                  card={card}
                />
              ))}
            </div>
          </div>
          {/*Task Status*/}
          <div className="w-full md:w-4/12">
            <h2 className="font-semibold text-xl mb-2">Task Status</h2>
            <TaskStatus
              taskStatus={taskStatus}
              completeHandler={completeHandler}
              complete={complete}
              data={data}
              setData={setData}
            ></TaskStatus>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
