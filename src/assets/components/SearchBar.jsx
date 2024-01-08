const SearchBar = (props) => {
  const { search, setSearch, data, emojis, setEmojis } = props;
  return (
    <div className="search-bar">
      <input
        type="text"
        value={search}
        placeholder="Happy, sad, heart ..."
        onChange={(event) => {
          const value = event.target.value;
          setSearch(value);
          const filteredEmojis = data.filter((emoji) => {
            return emoji.keywords.includes(value);
          });
          setEmojis(filteredEmojis);
        }}
      />
    </div>
  );
};

export default SearchBar;
