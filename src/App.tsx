import React from "react";
import FruitForm, { OnSubmitType } from "./components/FruitForm";
import FruitTable, { FruitType } from "./components/FruitTable";
import getPrice from "./utils/getPrice";
import getWeight from "./utils/getWeight";

const initialData = {
  name: "",
  total: 0,
  weight: 2,
  number: 0,
  price: 0,
};

function App() {
  const [data, setData] = React.useState(initialData);
  const [fruits, setFruits] = React.useState<FruitType[]>([]);

  // ADD
  const addFruit = (value: OnSubmitType) => {
    setFruits([
      ...fruits,
      {
        name: value.name,
        number: fruits.length + 1,
        total: value.total,
        weight: getWeight(value.weight),
        price: getPrice(value.weight, value.total),
      },
    ]);
  };

  // UPDATE
  const updateFruit = (value: OnSubmitType) => {
    setFruits(
      fruits.map((item) => {
        return item.number === value.number
          ? {
              name: value.name,
              number: Number(value.number),
              total: value.total,
              weight: getWeight(value.weight),
              price: getPrice(value.weight, value.total),
            }
          : item;
      })
    );
  };

  // DELETE
  const deleteFruit = (number: number) => {
    setFruits(fruits.filter((item) => item.number !== number));
  };

  return (
    <div className="container px-5 mx-auto">
      <div className="py-5 space-y-6">
        <FruitTable
          items={fruits}
          onDelete={deleteFruit}
          onEdit={(value) => setData(value)}
        />
        <FruitForm data={data} onSubmit={addFruit} onUpdate={updateFruit} />
      </div>
    </div>
  );
}

export default App;
