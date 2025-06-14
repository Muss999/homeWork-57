import type { FC } from "react";
import type { TypeUser } from "../../helpers/types";
import UserItem from "../UserItem/UserItem";

interface Props {
    users: TypeUser[];
}

const UserList: FC<Props> = ({ users }) => {
    return (
        <div>
            {users.map((user, index) => {
                return <UserItem key={`${user.id}-${index}`} user={user} />;
            })}
        </div>
    );
};

export default UserList;
