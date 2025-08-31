const getBtn = document.getElementById("getBtn");
const postBtn = document.getElementById("postBtn");

getBtn.addEventListener("click", async () => {
  try {
    const res = await fetch("https://reqres.in/api/unknown/23");
    if (!res.ok) throw new Error("GET failed");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Error:", err);
  }
});

postBtn.addEventListener("click", async () => {
  try {
    const res = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Jane", job: "Tester" }),
    });
    if (!res.ok) throw new Error("POST failed");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Error:", err);
  }
});
