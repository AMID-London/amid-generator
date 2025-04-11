document.getElementById("postForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const category = document.getElementById("category").value;
  const style = document.getElementById("style").value;
  const details = document.getElementById("details").value;
  const email = document.getElementById("email").value;

  const platforms = Array.from(document.querySelectorAll("#platforms input:checked")).map(el => el.value);

  const prompt = `Створи ${style.toLowerCase()} пост у категорії "${category}" для платформи(платформ): ${platforms.join(", ")}. Текст повинен бути на українській мові. Опис: ${details}`;

  const result = await fetch("https://script.google.com/macros/s/AKfycbzHeQzYSMZxCbCInHLakEYDuBCTO3uK-WFUt8JZBBUcohasklDIkqFtlTw9tykis5TT/exec", {
    method: "POST",
    body: JSON.stringify({ prompt, email }),
    headers: {
      "Content-Type": "application/json"
    }
  });

  const data = await result.json();

  alert("✅ Ваш пост готовий!\n\n" + data.result);
});
