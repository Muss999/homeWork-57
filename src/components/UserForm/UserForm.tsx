const UserForm = () => {
    return (
        <form>
            <div className="form-floating mb-3">
                <input
                    type="string"
                    className="form-control"
                    id="floatingName"
                    placeholder="Name"
                />
                <label htmlFor="floatingName">Name</label>
            </div>
            <div className="form-floating mb-3">
                <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <select
                className="form-select mb-3"
                aria-label="Default select example"
            >
                <option value="" disabled>
                    Choose Role
                </option>
                <option value="user">User</option>
                <option value="editor">Editor</option>
                <option value="admin">Admin</option>
            </select>
            <div className="d-flex gap-4 mb-3">
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkDefault"
                    />
                    <label className="form-check-label" htmlFor="checkDefault">
                        Yes
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkDefault"
                    />
                    <label className="form-check-label" htmlFor="checkDefault">
                        No
                    </label>
                </div>
            </div>
            <button type="submit" className="btn btn-success">
                Create
            </button>
        </form>
    );
};

export default UserForm;
