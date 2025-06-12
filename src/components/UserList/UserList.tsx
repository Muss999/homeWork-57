import type { FC } from "react";
import type { typeUser } from "../../helpers/types";
import UserItem from "../UserItem/UserItem";

interface Props {
    users: typeUser[];
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
