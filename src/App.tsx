import { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";
import type { TypeUser } from "./helpers/types";

const App = () => {
    const [users, setUsers] = useState<TypeUser[]>([
        {
            name: "Tom",
            email: "tom@mail.ru",
            isActive: true,
            role: "admin",
            id: crypto.randomUUID(),
        },
        {
            name: "Andy",
            email: "andy@mail.ru",
            isActive: false,
            role: "editor",
            id: crypto.randomUUID(),
        },
    ]);
    const addUser = (user: TypeUser) => {
        setUsers((prevState) => [...prevState, user]);
    };
    return (
        <>
            <main className="container d-flex gap-4 mt-3">
                <div className="col-6">
                    <UserForm onSubmit={addUser} />
                </div>
                <div className="col-6">
                    <UserList users={users} />
                </div>
            </main>
        </>
    );
};

export default App;
