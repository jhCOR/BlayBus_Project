import React, { useState } from "react";
import "../styles/ProfileEditForm.css"; // 새로 생성된 CSS 파일을 import

const ProfileEditForm = ({ defaultProfile, onSave, onCancel }) => {
  const [profileInfo, setProfileInfo] = useState(defaultProfile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo({ ...profileInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(profileInfo);
  };

  return (
    <div className="profile-edit-modal">
      <form onSubmit={handleSubmit} className="profile-edit-form">
        <h2>프로필 수정</h2>
        <label>소개 *</label>
        <textarea
          name="intro"
          value={profileInfo.intro}
          onChange={handleChange}
          rows="3"
          required
        />
        <label>나이</label>
        <input
          type="number"
          name="age"
          value={profileInfo.age}
          onChange={handleChange}
        />
        <label>위치</label>
        <input
          type="text"
          name="location"
          value={profileInfo.location}
          onChange={handleChange}
        />
        <div className="button-group">
          <button type="submit">확인</button>
          <button type="button" onClick={onCancel}>
            취소
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEditForm;