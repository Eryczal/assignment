import { createSelector } from "reselect";
import { User } from "./types";
import { userApi } from "./userApi";
import { RootState } from "./store";

const selectAllUsers = userApi.endpoints.getAllUsers.select();

export const selectFilteredUsers = createSelector([selectAllUsers, (state: RootState) => state.filter], (usersResult, filters) => {
    const users: User[] = usersResult?.data || [];

    if (!users.length) {
        return [];
    }

    return users.filter((user: User) => {
        const matchesName: boolean = user.name.toLowerCase().includes(filters.name.toLowerCase());
        const matchesUsername: boolean = user.username.toLowerCase().includes(filters.username.toLowerCase());
        const matchesEmail: boolean = user.email.toLowerCase().includes(filters.email.toLowerCase());
        const matchesPhone: boolean = user.phone.toLowerCase().includes(filters.phone.toLowerCase());

        return matchesName && matchesUsername && matchesEmail && matchesPhone;
    });
});
