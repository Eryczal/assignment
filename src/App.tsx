import { Provider } from "react-redux";
import "./App.css";
import Table from "./components/Table";
import { store } from "./app/store";

function App() {
    return (
        <Provider store={store}>
            <Table></Table>
        </Provider>
    );
}

export default App;
