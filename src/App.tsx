import { Provider } from "react-redux";
import "./App.css";
import Table from "./components/Table";
import { store } from "./app/store";
import Filters from "./components/Filters";

function App() {
    return (
        <Provider store={store}>
            <div className="container">
                <Filters></Filters>
                <Table></Table>
            </div>
        </Provider>
    );
}

export default App;
