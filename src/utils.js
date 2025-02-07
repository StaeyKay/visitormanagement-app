const BASE_URL = "http://localhost:3005/api/v1";

// Add visitors endpoint integration
export async function saveVisitors(visitor) {
  const visitorResponse = await fetch(`${BASE_URL}/visitors`, {
    method: "POST",
    body: JSON.stringify(visitor),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await visitorResponse.json();
  return response;
}

// Add employees who pick up/drop-off keys endpoint integration
export async function saveEmployees(employee) {
  const employeeResponse = await fetch(`${BASE_URL}/employee`, {
    method: "POST",
    body: JSON.stringify(employee),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await employeeResponse.json();
  return response;
}

// Get employees who pick up/drop-off keys endpoint integration
export async function getEmployees() {
  const employeeResponse = await fetch(`${BASE_URL}/employee`, {
    method: "GET"
  });

  const response = await employeeResponse.json();
  return response
}

// Get visitors endpoint integration
export async function getVisitors(queryParams) {
  const visitorResponse = await fetch(`${BASE_URL}/visitors`, {
    method: "GET",
  });

  const response = await visitorResponse.json();
  return response;
}

// Update visitor's departure time endpoint integration
export async function updateVisitor(visitorId, updatedData) {
  const visitorResponse = await fetch(`${BASE_URL}/visitors/${visitorId}`, {
    method: "PATCH",
    body: JSON.stringify(updatedData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await visitorResponse.json();
  return response;
}

// Utility function to filter visitors
export async function filterVisitors(filter) {
  const visitorResponse = await fetch(
    `${BASE_URL}/visitors?filter=${JSON.stringify({ visitorName: filter })}`,
    {
      method: "GET",
    }
  );

  const response = await visitorResponse.json();
  return response;
}
