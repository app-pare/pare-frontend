import APIRequest from "../APIRequest";

export default class UserAPI {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
    this.api = new APIRequest(apiUrl);
  }

  async loginByUsernameAndPass(usernameAndPassword) {
    try {
      const response = await this.api.post("login", usernameAndPassword);
      return response;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  async getUsers() {
    try {
      const users = await this.api.get("users");
      return users;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  async getUser(userId) {
    try {
      const user = await this.api.get(`users/${userId}`);
      return user;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  async createUser(user) {
    try {
      const createdUser = await this.api.post("users", user);
      return createdUser;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  async updateUser(userId, user) {
    try {
      const updatedUser = await this.api.put(`users/${userId}`, user);
      return updatedUser;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  async deleteUser(userId) {
    try {
      const deletedUser = await this.api.delete(`users/${userId}`);
      return deletedUser;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
}
