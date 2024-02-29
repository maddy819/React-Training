export const fetchAvailablePlaces = async () => {
  const response = await fetch("http://localhost:3000/places");

  if (!response.ok) {
    throw new Error("failed to fetch places.");
  }

  const resData = await response.json();
  return resData.places;
};

export const fetchUserPlaces = async () => {
  const response = await fetch("http://localhost:3000/user-places");

  if (!response.ok) {
    throw new Error("failed to fetch user places.");
  }

  const resData = await response.json();
  return resData.places;
};

export const updateUserPlaces = async (places) => {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("failed to update user places.");
  }

  const resData = await response.json();
  return resData.message;
};
