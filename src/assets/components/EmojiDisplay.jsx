import EmojiLine from "./EmojiLine";

const EmojiDisplay = (props) => {
  const { emojis } = props;
  const emojisToDisplay = [];
  let num = 20;
  if (emojis.length < 20) {
    num = emojis.length;
  }
  for (let i = 0; i < num; i++) {
    emojisToDisplay.push(emojis[i]);
  }
  return (
    <div className="emoji-display">
      {emojisToDisplay.map((emoji, ind) => {
        return <EmojiLine emoji={emoji} key={ind} />;
      })}
    </div>
  );
};

export default EmojiDisplay;
