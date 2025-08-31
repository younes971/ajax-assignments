const postBtn = document.getElementById("postBtn");

postBtn.addEventListener("click", async () => {
  const url = "https://reqres.in/api/users";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "reqres-free-v1",
    },
    body: JSON.stringify({
      name: "John Doe",
      job: "Developer",
    }),
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    console.log("Response data:", data);
  } catch (error) {
    console.error("Error posting data:", error);
  }
});
