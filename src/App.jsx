// React imports
import { useState } from "react";
// Style
import "../src/assets/css/App.css";
// Components
import Header from "./assets/components/Header";
import SearchBar from "./assets/components/SearchBar";
import EmojiDisplay from "./assets/components/EmojiDisplay";
import Footer from "./assets/components/Footer";
// JSON data
import data from "./assets/json/emojiList.json";

function App() {
  const [emojis, setEmojis] = useState(data);
  const [search, setSearch] = useState("");
  return (
    <>
      <Header />
      <main>
        <SearchBar
          search={search}
          setSearch={setSearch}
          data={data}
          emojis={emojis}
          setEmojis={setEmojis}
        />
        <EmojiDisplay emojis={emojis} />
      </main>
      <Footer />
    </>
  );
}

export default App;
