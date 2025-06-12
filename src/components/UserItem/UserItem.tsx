import type { FC } from "react";
import type { typeUser } from "../../helpers/types";

interface Props {
    user: typeUser;
}

const UserItem: FC<Props> = ({ user }) => {
    const { name, email, isActive, role } = user;
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text mb-1">Email: {email}</p>
                <p className="card-text mb-1">Active: {`${isActive}`}</p>
                <p className="card-text mb-1">Role: {role}</p>
            </div>
        </div>
    );
};

export default UserItem;
