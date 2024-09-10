import "./Table.css";
import { useGetAllUsersQuery } from "../app/userApi";
import { useSelector } from "react-redux";
import { selectFilteredUsers } from "../app/selectors";
import { User } from "../app/types";

const Table = () => {
    const { error, isLoading } = useGetAllUsersQuery();
    const filteredUsers = useSelector(selectFilteredUsers);

    if (isLoading) {
        return <div className="info-screen">Loading users...</div>;
    }

    if (error) {
        return <div className="info-screen">Error while loading users</div>;
    }

    if (filteredUsers) {
        return (
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <p>Name</p>
                            </th>
                            <th>
                                <p>Username</p>
                            </th>
                            <th>
                                <p>Email</p>
                            </th>
                            <th>
                                <p>Phone</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="no-users">
                                    No users found
                                </td>
                            </tr>
                        ) : (
                            filteredUsers.map((user: User) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
};

export default Table;
