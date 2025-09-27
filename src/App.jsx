import { Suspense, useState } from "react";
import "./App.css";
import CommonLayout from "./component/layout/commonLayout";
import Header from "./component/layout/Header";
import Customers from "./component/customers/Customers";
import toast from "react-hot-toast";
import Loading from "./component/customers/Loading";

const customerDataFetch = async () => {
  const res = await fetch("/coustomer.json");
  return res.json();
};
const custApiData = customerDataFetch();

function App() {
  const [card, setCard] = useState([]);
  const [taskStatus, setTaskStatus] = useState([]);
  const [complete, setComplete] = useState([]);

  const handleClickCard = (customer) => {
    const newCard = [...card, customer];
    if (!card.some((e) => e.id === customer.id)) {
      setCard(newCard);
      setTaskStatus(newCard);
      toast.success("In Progress");
    } else {
      toast.error("Already added In Progress!");
    }
  };
  const completeHandler = (item, data, setData) => {
    setTaskStatus((taskStatus) =>
      taskStatus.filter((task) => task.id !== item.id)
    );
    setComplete((complete) => [...complete, item]);
    setCard((card) => card.filter((c) => c.id !== item.id));

    setData(data.filter((e) => e.id !== item.id));
    toast.success(`Resolved : ${item.title} Completed!`);
  };

  return (
    <>
      <div>
        <CommonLayout>
          <Header card={card} complete={complete}></Header>
          <Suspense fallback={<Loading></Loading>}>
            <Customers
              custApiData={custApiData}
              handleClickCard={handleClickCard}
              card={card}
              taskStatus={taskStatus}
              completeHandler={completeHandler}
              complete={complete}
            ></Customers>
          </Suspense>
        </CommonLayout>
      </div>
    </>
  );
}
export default App;
