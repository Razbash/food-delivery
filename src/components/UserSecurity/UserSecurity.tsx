const UserSecurity = () => {
    return(
        <div className="user-security">
            <div className="block-title">Change password</div>

            <div className="user-security__form">
                <div className="input-wrapper">
                    <label htmlFor="current_password" className="input-label">Current password</label>
                    <input type="current_password"
                        id="current_password"
                        className="input"
                        required
                        placeholder="Enter current password"
                    />
                </div>

                <div className="input-wrapper">
                    <label htmlFor="new_password" className="input-label">New password</label>
                    <input type="new_password"
                        id="new_password"
                        className="input"
                        required
                        placeholder="Enter new password"
                    />
                </div>

                <div className="input-wrapper">
                    <label htmlFor="confirm_new_password" className="input-label">Confirm new password</label>
                    <input type="confirm_new_password"
                        id="confirm_new_password"
                        className="input"
                        required
                        placeholder="Confirm new password"
                    />
                </div>
            </div>

            <button className="button">Change password</button>
        </div>
    )
}

export default UserSecurity;