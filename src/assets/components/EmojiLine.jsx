import copyToClipboard from "../js/copyToClipboard";

const EmojiLine = (props) => {
  const { emoji } = props;
  return (
    <div
      className="emoji-line"
      onClick={async () => {
        console.log("Coucou");
        await copyToClipboard(emoji.symbol);
      }}
    >
      <span>{emoji.symbol}</span>
      <span>{emoji.title}</span>
      <span className="invisible">Click to copy !</span>
    </div>
  );
};

export default EmojiLine;
