import React from "react";

const LoginForm = ({ isShowHire }) => {
  return (
    <div className={`${isShowHire ? "active" : ""} show`}>
      <div className="hire-form">
        <div className="form-box solid">
          <form>
            <h1 className="hire-text">Hire</h1>
            <label>Company Name</label>
            <br></br>
            <input type="text" name="username" className="hire-box" />
            <br></br>
            <label>Position</label>
            <br></br>
            <input type="text" name="postion" className="hire-box" />
            <br></br>
            <input type="submit" value="Hire" className="hire-btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
