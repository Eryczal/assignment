import { useGetAllUsersQuery } from "../app/userApi";

const Table = () => {
    const { data, error, isLoading } = useGetAllUsersQuery();

    return <></>;
};

export default Table;
