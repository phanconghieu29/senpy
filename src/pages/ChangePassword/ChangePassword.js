import React, { Component } from 'react';
import './ChangePassword.css';

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      message: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  validatePasswords = () => {
    const { newPassword, confirmPassword } = this.state;
    if (newPassword !== confirmPassword) {
      this.setState({ message: 'Mật khẩu mới và xác nhận mật khẩu không khớp.' });
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (!this.validatePasswords()) return;

    // Simulate password change
    this.setState({
      message: 'Đổi mật khẩu thành công!',
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  renderInputField = (label, type, name, value) => (
    <label className="input-label">
      <span className="input-label-text">{label}:</span>
      <input
        className="input-field"
        type={type}
        name={name}
        value={value}
        onChange={this.handleChange}
        required
      />
    </label>
  );

  render() {
    const { currentPassword, newPassword, confirmPassword, message } = this.state;

    return (
      <div className="change-password">
        <h2 className="change-password-header">Đổi Mật Khẩu</h2>
        <form onSubmit={this.handleSubmit} className="form-container">
          {this.renderInputField('Mật khẩu hiện tại', 'password', 'currentPassword', currentPassword)}
          {this.renderInputField('Mật khẩu mới', 'password', 'newPassword', newPassword)}
          {this.renderInputField('Xác nhận mật khẩu mới', 'password', 'confirmPassword', confirmPassword)}
          
          <button className="submit-button" type="submit">Đổi Mật Khẩu</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    );
  }
}

export default ChangePassword;
