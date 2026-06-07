const API_BASE_URL = "http://localhost:8000/api";

export async function fetchDefinition(word: string) {
  const response = await fetch(`${API_BASE_URL}/definitions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ word }),
  });
  return response.json();
}

export async function saveWord(wordData: {
  word: string;
  meaning: string;
  book_title: string;
  author_first_name: string;
  author_surname: string;
}) {
  const response = await fetch(`${API_BASE_URL}/words`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(wordData),
  });
  return response.json();
}

export async function getAllWords() {
  const response = await fetch(`${API_BASE_URL}/words`);
  return response.json();
}