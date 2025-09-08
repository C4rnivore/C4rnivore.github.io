import "./index.css";
import { schedule } from "./data/schedule";

const days = Object.keys(schedule);

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center py-6">
        💅 Pikmi Schedule 💅
      </h1>

      <table className="w-full border border-gray-300">
        <thead className="flex flex-row">
          <tr>
            <th>Пара</th>
          </tr>
          {days.map((day) => (
            <tr key={day}>
              <th className="text-center">{day}</th>
            </tr>
          ))}
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
}

export default App;
