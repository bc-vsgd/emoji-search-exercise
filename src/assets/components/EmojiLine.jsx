import copyToClipboard from "../js/copyToClipboard";

const EmojiLine = (props) => {
  const { emoji } = props;
  return (
    <div
      className="emoji-line"
      onClick={async () => {
        await copyToClipboard(emoji.symbol);
      }}
    >
      <div>
        <span>{emoji.symbol}</span>
        <span>{emoji.title}</span>
      </div>
      <div className="invisible">Click to copy !</div>
    </div>
  );
};

export default EmojiLine;
