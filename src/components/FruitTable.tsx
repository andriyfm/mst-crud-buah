import * as React from "react";

export type FruitType = {
  number: number;
  name: string;
  total: number;
  weight: number;
  price: number;
};

interface Props {
  items: FruitType[];
  onDelete: (number: number) => void;
  onEdit: (fruit: FruitType) => void;
}

const FruitTable: React.FC<Props> = (props) => {
  return (
    <div>
      <h2>daftar harga buah</h2>

      <table>
        <thead className="bg-green-200">
          <tr>
            <th className="w-10">no</th>
            <th>name</th>
            <th>harga total</th>
            <th>berat total</th>
            <th>harga per kg</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item) => (
            <tr key={item.number} className="even:bg-green-50">
              <td>{item.number}</td>
              <td>{item.name}</td>
              <td>{item.total}</td>
              <td>{item.weight} kg</td>
              <td>{item.price}</td>
              <td>
                <div className="space-x-2">
                  <button
                    className="btn-sm bg-blue-500"
                    onClick={() => props.onEdit(item)}
                  >
                    edit
                  </button>
                  <button
                    className="btn-sm bg-red-500"
                    onClick={() => props.onDelete(item.number)}
                  >
                    delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FruitTable;
