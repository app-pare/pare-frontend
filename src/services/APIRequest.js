class APIRequest {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  async get(endpoint) {
    try {
      const response = await fetch(`${this.apiUrl}/${endpoint}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  async post(endpoint, body) {
    try {
      const response = await fetch(`${this.apiUrl}/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  async put(endpoint, body) {
    try {
      const response = await fetch(`${this.apiUrl}/${endpoint}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  async delete(endpoint) {
    try {
      const response = await fetch(`${this.apiUrl}/${endpoint}`, {
        method: "DELETE",
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
}
