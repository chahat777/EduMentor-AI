async function askAI() {
  const topic = document.getElementById("topic").value;

  const res = await fetch("http://localhost:3000/ask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ topic })
  });

  const data = await res.json();
  document.getElementById("result").innerText =
    data.candidates[0].content.parts[0].text;
}
