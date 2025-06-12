import { useState, type ChangeEvent, type FC, type FormEvent } from "react";
import type { TypeUser, TypeUserMutation } from "../../helpers/types";

interface Props {
    onSubmit: (user: TypeUser) => void;
}

const initialUser: TypeUserMutation = {
    name: "",
    email: "",
    isActive: false,
    role: "",
};

const UserForm: FC<Props> = ({ onSubmit }) => {
    const [user, setUser] = useState<TypeUserMutation>(initialUser);

    const onSubmitHandler = (event: FormEvent) => {
        event.preventDefault();
        if (!user.name || !user.email || !user.role) {
            alert("Some inputs are empty");
            return;
        }
        onSubmit({
            id: crypto.randomUUID(),
            ...user,
        });
        setUser(initialUser);
    };
    const changeUser = (
        event: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const name = event.target.name;
        const value = event.target.value;
        const checked = (event.target as HTMLInputElement).checked;

        setUser((prevState) => ({
            ...prevState,
            [name]: name === "isActive" ? checked : value,
        }));
    };
    return (
        <form onSubmit={onSubmitHandler}>
            <div className="form-floating mb-3">
                <input
                    type="string"
                    className="form-control"
                    id="floatingName"
                    placeholder="Name"
                    name="name"
                    value={user.name}
                    onChange={changeUser}
                />
                <label htmlFor="floatingName">Name</label>
            </div>
            <div className="form-floating mb-3">
                <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    name="email"
                    value={user.email}
                    onChange={changeUser}
                />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <select
                className="form-select mb-3"
                aria-label="Default select example"
                name="role"
                value={user.role}
                onChange={changeUser}
            >
                <option value="" disabled>
                    Choose Role
                </option>
                <option value="user">User</option>
                <option value="editor">Editor</option>
                <option value="admin">Admin</option>
            </select>
            <div className="form-check mb-3">
                <input
                    className="form-check-input"
                    type="checkbox"
                    name="isActive"
                    checked={user.isActive}
                    id="checkDefault"
                    onChange={changeUser}
                />
                <label className="form-check-label" htmlFor="checkDefault">
                    Is active?
                </label>
            </div>
            <button type="submit" className="btn btn-success">
                Create
            </button>
        </form>
    );
};

export default UserForm;
