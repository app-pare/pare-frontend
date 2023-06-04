import { Cookies } from "quasar";
import { useUserStore } from "src/stores/user";

export default class APIRequest {
  constructor(apiUrl = process.env.API) {
    this.apiUrl = apiUrl;
  }

  async get(endpoint) {
    try {
      const store = useUserStore();
      const token = store.getToken;

      const response = await fetch(`${this.apiUrl}/${endpoint}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return response;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  async post(endpoint, body) {
    try {
      const store = useUserStore();
      const token = store.getToken;

      const response = await fetch(`${this.apiUrl}/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
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
      const store = useUserStore();
      const token = store.getToken;

      const response = await fetch(`${this.apiUrl}/${endpoint}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
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
      const store = useUserStore();
      const token = store.getToken;

      const response = await fetch(`${this.apiUrl}/${endpoint}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return response;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
}
