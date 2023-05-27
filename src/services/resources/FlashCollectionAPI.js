import APIRequest from "../APIRequest";

export default class CollectionFlashCardAPI {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
    this.api = new APIRequest(apiUrl);
  }

  async getFlashCardFlashCardCollections() {
    try {
      const flashcards_collections = await this.api.get(
        "collections/flashcards"
      );
      return flashcards_collections;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  async getFlashCardCollection(collectionId) {
    try {
      const collection = await this.api.get(
        `collections/flashcards/${collectionId}`
      );
      return collection;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  async createFlashCardCollection(collection) {
    try {
      const createdFlashCardCollection = await this.api.post(
        "collections/flashcards",
        collection
      );
      return createdFlashCardCollection;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  async updateFlashCardCollection(collectionId, collection) {
    try {
      const updatedFlashCardCollection = await this.api.put(
        `collections/flashcards/${collectionId}`,
        collection
      );
      return updatedFlashCardCollection;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  async deleteFlashCardCollection(collectionId) {
    try {
      const deletedFlashCardCollection = await this.api.delete(
        `collections/flashcards/${collectionId}`
      );
      return deletedFlashCardCollection;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
}
