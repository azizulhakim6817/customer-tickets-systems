import { Calendar1Icon } from "lucide-react";
const Customer = ({ customer, handleClickCard }) => {
  return (
    <div
      className={`flex-col-1 md:flex gap-4 space-y-4 md:space-y-0`}
      onClick={() => handleClickCard(customer)}
    >
      <div className="w-full  p-4 flex-col-1 md:flex gap-4 justify-between items-center rounded-sm bg-white shadow-xl">
        <div>
          <div className="flex gap-4 justify-between items-center rounded-md">
            <h3 className="text-[14px] md:text-[18px] font-semibold text-[#001931]">
              {customer.title}
            </h3>
            <div className=" text-center ">
              <p className="flex justify-center items-center gap-1 text-xs p-[3px] px-2 md:px-3 text-bold rounded-full bg-[#B9F8CF]">
                <span className="mr-1 text-center inline-block rounded-full bg-[#02A53B] w-3 h-3"></span>
                {/*  {customer.status} */}
                {customer.status}
              </p>
            </div>
          </div>
          <p className="my-2 text-[#627382] text-[16px] ">
            {customer.description}
          </p>
          <div className="flex-col-1 md:flex gap-4 justify-between items-center">
            <div className="flex justify-between md:justify-center md:items-center gap-4">
              <p className="text-[#627382] text-[14px]">{customer.id}</p>
              <p className="text-[#F83044] text-[12px]">{customer.priority}</p>
            </div>
            <div className="flex justify-between md:justify-center items-start md:items-center gap-4">
              <div>
                <p className="text-[#627382] text-[14px]">
                  {customer.customer}
                </p>
              </div>
              <div className="flex  mr-3  flex-col-1 md:flex items-center gap-2">
                <Calendar1Icon className="w-4 h-4 md:w-6 md:h-5 text-[#627382]" />
                <p className="text-[#627382] text-[14px]">
                  {customer.createdAt}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
