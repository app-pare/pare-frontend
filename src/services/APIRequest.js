export default class APIRequest {
  constructor(apiUrl = process.env.API) {
    this.apiUrl = apiUrl;
  }

  async get(endpoint) {
    try {
      const response = await fetch(`${this.apiUrl}/${endpoint}`);
      return response;
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
      return response;
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
      return response;
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
      return response;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
}
