import "./Filters.css";
import { useDispatch, useSelector } from "react-redux";
import { FilterType } from "../app/types";
import { clearFilters, setFilter } from "../app/filtersSlice";
import { RootState } from "../app/store";

const Filters = () => {
    const dispatch = useDispatch();
    const filters = useSelector((state: RootState) => state.filter);

    const handleFilterChange = (type: FilterType, value: string) => {
        dispatch(setFilter({ type, text: value }));
    };

    const handleFilterClick = () => {
        dispatch(clearFilters());
    };

    return (
        <div className="filters">
            <h2>Filters</h2>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" className="filter-input" value={filters.name} onChange={(e) => handleFilterChange("name", e.target.value)} />
            </div>
            <div>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    className="filter-input"
                    value={filters.username}
                    onChange={(e) => handleFilterChange("username", e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" className="filter-input" value={filters.email} onChange={(e) => handleFilterChange("email", e.target.value)} />
            </div>
            <div>
                <label htmlFor="phone">Phone</label>
                <input id="phone" type="text" className="filter-input" value={filters.phone} onChange={(e) => handleFilterChange("phone", e.target.value)} />
            </div>
            <button onClick={() => handleFilterClick()}>Clear</button>
        </div>
    );
};

export default Filters;
