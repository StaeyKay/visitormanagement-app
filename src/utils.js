const BASE_URL = "http://localhost:5060/api/v1";

// Add visitors endpoint integration
export async function saveVisitors(visitor) {
  const visitorResponse = await fetch(`${BASE_URL}/visitors`, {
    method: "POST",
    body: JSON.stringify(visitor),
  });

  const response = await visitorResponse.json();
  return response;
}
