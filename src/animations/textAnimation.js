export async function animationWriteText(text, currentText = "", inputing = true, delay = 100) {
  if (!inputing && currentText.length === 0) inputing = true;
  if (text === currentText) inputing = false;

  if (inputing) {
    currentText += text.charAt(currentText.length);
  } else {
    currentText = currentText.slice(0, -1);
  }
  await new Promise((resolve) => setTimeout(resolve, delay + Math.random() * 550));

  return { currentText, inputing };
}
