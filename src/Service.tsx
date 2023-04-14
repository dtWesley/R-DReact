export const getTest = async () => {
  try {
    const response = await fetch("http://localhost:3500/test", {
      method: "GET",
      headers: { "content-type": "application/json" },
    });
    if (response.ok) {
      const result = await response.text();
      return result;
    }
  } catch (e) {
    if (e instanceof Error) return e.message;

    throw e;
  }
};

export const getAdd = async (word: string) => {
  try {
    const response = await fetch("http://localhost:3500/add", {
      method: "POST",
      body: JSON.stringify({ word: word }),
      headers: {
        "content-type": "application/json",
      },
    });
    if (response.ok) {
      const result = await response.text();

      return result;
    }
  } catch (e) {
    if (e instanceof Error) return e.message;

    throw e;
  }
};
