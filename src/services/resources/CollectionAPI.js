class CollectionAPI {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
    this.api = new APIRequest(apiUrl);
  }

  async getCollections() {
    try {
      const collections = await this.api.get("collections");
      return collections;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  async getCollection(collectionId) {
    try {
      const collection = await this.api.get(`collections/${collectionId}`);
      return collection;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  async createCollection(collection) {
    try {
      const createdCollection = await this.api.post("collections", collection);
      return createdCollection;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  async updateCollection(collectionId, collection) {
    try {
      const updatedCollection = await this.api.put(
        `collections/${collectionId}`,
        collection
      );
      return updatedCollection;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  async deleteCollection(collectionId) {
    try {
      const deletedCollection = await this.api.delete(
        `collections/${collectionId}`
      );
      return deletedCollection;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
}
