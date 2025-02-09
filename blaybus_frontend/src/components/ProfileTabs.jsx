import React from "react";

const ProfileTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs">
      <button
        className={`tab ${activeTab === "info" ? "active" : ""}`}
        onClick={() => setActiveTab("info")}
      >
        프로필 정보
      </button>
      <button
        className={`tab ${activeTab === "photos" ? "active" : ""}`}
        onClick={() => setActiveTab("photos")}
      >
        사진 갤러리
      </button>
    </div>
  );
};

export default ProfileTabs;