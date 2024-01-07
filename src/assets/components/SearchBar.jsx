const SearchBar = (props) => {
  const { search, setSearch, data, emojis, setEmojis } = props;
  return (
    <input
      type="text"
      value={search}
      onChange={(event) => {
        const value = event.target.value;
        setSearch(value);
        const filteredEmojis = data.filter((emoji) => {
          return emoji.keywords.includes(value);
        });
        setEmojis(filteredEmojis);
      }}
    />
  );
};

export default SearchBar;
