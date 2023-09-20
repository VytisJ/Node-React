import AxiosGet from "./AxiosGet";
import AxiosPost from "./AxiosPost";
import Users from "./Users";

const App = () => {
  return (
    <div>
      <AxiosGet />
      <AxiosPost />
      <Users />
    </div>
  );
};

export default App;
