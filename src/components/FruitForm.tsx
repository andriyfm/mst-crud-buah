import * as React from "react";
import { FruitType } from "./FruitTable";

export type OnSubmitType = {
  number?: number;
  price?: number;
  name: string;
  total: number;
  weight: number;
};

interface Props {
  onSubmit: (value: OnSubmitType) => void;
  onUpdate: (value: OnSubmitType) => void;
  data: FruitType;
}

const FruitForm: React.FC<Props> = (props) => {
  const [number, setNumber] = React.useState(props.data.number);
  const [price, setPrice] = React.useState(props.data.price);
  const [name, setName] = React.useState(props.data.name);
  const [total, setTotal] = React.useState(props.data.total);
  const [weight, setWeight] = React.useState(props.data.weight);

  const reset = () => {
    setNumber(0);
    setPrice(0);
    setName("");
    setTotal(0);
    setWeight(2000);
  };

  const handleSubmit = () => {
    if (name) {
      props.onSubmit({
        name,
        number: !number ? 1 : number,
        price: !price ? 0 : price,
        total: Number(total),
        weight: Number(weight),
      });
      reset();
    }
  };

  const handleUpdate = () => {
    if (name) {
      props.onUpdate({
        number,
        price,
        name,
        total: Number(total),
        weight: Number(weight),
      });
    }
  };

  React.useEffect(() => {
    setNumber(props.data.number);
    setPrice(props.data.price);
    setName(props.data.name);
    setTotal(props.data.total);
    setWeight(props.data.weight * 1000);
  }, [props.data]);

  return (
    <div>
      <h2>form daftar harga buah</h2>

      <div className="space-y-3">
        <div className="flex items-center justify-between space-x-4">
          <label htmlFor="name">nama:</label>
          <input
            type="text"
            placeholder="Enter fruit name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between space-x-4">
          <label htmlFor="harga total">harga total:</label>
          <input
            type="number"
            value={total}
            onChange={(e) => setTotal(Number(e.target.value))}
          />
        </div>

        <div className="flex items-center justify-between space-x-4">
          <label htmlFor="harga total">berat total (gram):</label>
          <input
            type="number"
            min={2000}
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
        </div>

        <div className="space-x-3">
          <button onClick={handleSubmit} className="btn-md">
            submit
          </button>

          <button onClick={handleUpdate} className="bg-blue-300 btn-md">
            update
          </button>
        </div>
      </div>
    </div>
  );
};

export default FruitForm;
