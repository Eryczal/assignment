import { Provider } from "react-redux";
import "./App.css";
import Table from "./components/Table";
import { store } from "./app/store";

function App() {
    return (
        <Provider store={store}>
            <div className="container">
                <Table></Table>
            </div>
        </Provider>
    );
}

export default App;
