// Gjej elementet nga DOM
const inputText = document.getElementById("inputText");
const searchWord = document.getElementById("searchWord");
const filterButton = document.getElementById("filterButton");
const outputText = document.getElementById("outputText");
const exportButton = document.getElementById("exportButton");

// Funksioni për të filtruar rreshtat
filterButton.addEventListener("click", () => {
  const text = inputText.value; // Merr tekstin origjinal
  const word = searchWord.value.trim(); // Fjala për kërkim
  if (!word) {
    alert("Ju lutem vendosni një fjalë për kërkim!");
    return;
  }

  // Ndajmë tekstin në rreshta dhe filtrojmë ato që përmbajnë fjalën
  const rows = text.split("\n");
  const filteredRows = rows.filter(row => row.includes(word));

  // Shfaqim rreshtat e filtruar në kutinë e rezultateve
  outputText.value = filteredRows.join("\n");
});

// Funksioni për eksportimin e tekstit
exportButton.addEventListener("click", () => {
  const text = outputText.value; // Merr tekstin nga kutia e rezultateve
  if (!text) {
    alert("Nuk ka asnjë tekst për të eksportuar!");
    return;
  }

  // Krijo një objekt Blob me tekstin
  const blob = new Blob([text], { type: "text/plain" });

  // Krijo një link për shkarkim
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "rezultatet.txt";

  // Kliko linkun për të shkarkuar skedarin
  link.click();

  // Largoj linkun nga DOM
  URL.revokeObjectURL(link.href);
});
