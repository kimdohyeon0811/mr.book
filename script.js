const quotes = [
  "절대아니다",
  "기회라고 생각해라",
  "지금아니면 안된다",
  "타협이 쉽지않음을 깨닫게 될수도",
  "당신이 주도권을 잡는 일이 일어날것이다", 
  "쾌쾌 묵은 방법들은 과감히 버려라",
  "생각지 못한 일이날것이다",
  "",
  "",
  "",
  "",
  "",
  "",
 
  // 추가적인 명언들을 배열에 추가할 수 있습니다.
];

function displayRandomQuote() {
  const quoteInput = document.getElementById("quoteInput");
  const quoteText = document.getElementById("quoteText");

  if (quoteInput.value === "") {
    quoteText.innerText = "명언을 입력하세요.";
  } else {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.innerText = quotes[randomIndex];
  }

  quoteInput.value = "";
}

document.getElementById("quoteInput").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    displayRandomQuote();
  }
});