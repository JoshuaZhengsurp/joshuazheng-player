import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Home() {
  const [song, setSong] = useState([]);
  const headerLink = [
    { title: "Message", path: "home" },
    { title: "Music Library", path: "ml" },
    { title: "Search", path: "search" },
  ];
  const [headerActive, setHeaderActive] = useState(0);
  const [keyword, setKeyword] = useState("");
  const Navigate = useNavigate();

  const handleHeader = (idx: number, path: string) => {
    // router
    setHeaderActive(idx);
    Navigate("/" + path);
  }

  // input keyword
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  }
  // search
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      Navigate(`/search?keyword=${encodeURIComponent(keyword)}`);
    }
  }
  return (
    <>
      <div className='main-container'>
        <div className='main-header'>
          {/* left Title */}
          <span className='menu-link-main'>Hot Music</span>
          {/* Tabs */}
          <div className="header-menu">
            {headerLink.map((item, idx) => (
              <span
                key={idx}
                onClick={() => handleHeader(idx, item.path)}
                className={
                  `main-header-link ${headerActive === idx ? "is-active" : ""}`
                }
              >
                {item.title}
              </span>
            ))}
          </div>
          {/* Search */}
          <div className='search-bar'>
            <input
              type="text"
              onChange={(event) => handleChange(event)}
              value={keyword}
              placeholder='Search'
              onKeyDown={handleKeyPress}
            />
          </div>
          {/* static data */}
          <div className='content-wrapper'></div>
        </div>
      </div>
    </>
  )
}

export default Home
