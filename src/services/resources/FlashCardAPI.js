import APIRequest from "../APIRequest";

export default class FlashcardAPI {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
    this.api = new APIRequest(apiUrl);
  }

  async getFlashcards() {
    try {
      const flashcards = await this.api.get("flashcards");
      return flashcards;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  async getFlashcard(flashcardId) {
    try {
      const flashcard = await this.api.get(`flashcards/${flashcardId}`);
      return flashcard;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  async createFlashcard(flashcard) {
    try {
      const createdFlashcard = await this.api.post("flashcards", flashcard);
      return createdFlashcard;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  async updateFlashcard(flashcardId, flashcard) {
    try {
      const updatedFlashcard = await this.api.put(
        `flashcards/${flashcardId}`,
        flashcard
      );
      return updatedFlashcard;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  async deleteFlashcard(flashcardId) {
    try {
      const deletedFlashcard = await this.api.delete(
        `flashcards/${flashcardId}`
      );
      return deletedFlashcard;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
}
