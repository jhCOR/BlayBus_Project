// SearchBar Component
const SearchBar = () => {
    return (
        <div className="search-bar" style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "20px 0" }}>
            <input 
                type="text" 
                placeholder="소개받고 싶은 사람의 유형을 검색해보세요..." 
                className="search-input" 
                style={{
                    padding: "10px 15px",
                    fontSize: "1rem",
                    border: "1px solid #ddd",
                    borderRadius: "5px 0 0 5px",
                    outline: "none",
                    flex: "1",
                    maxWidth: "400px",
                }}
            />
            <button 
                className="search-button" 
                style={{
                    padding: "10px 20px",
                    fontSize: "1rem",
                    backgroundColor: "#b01c2e",
                    color: "#fff",
                    border: "none",
                    borderRadius: "0 5px 5px 0",
                    cursor: "pointer",
                }}
            >
                검색
            </button>
        </div>
    );
};

export default SearchBar;
