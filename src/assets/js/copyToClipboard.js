const copyToClipboard = async (symbol) => {
  try {
    await navigator.clipboard.writeText(symbol);
    console.log("Copied");
  } catch (error) {
    console.log(error.message);
  }
};

export default copyToClipboard;
