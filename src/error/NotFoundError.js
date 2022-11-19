class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "Not Found";
    this.status = 404;
  }

  get status() {
    return this.status;
  }
}

module.exports = NotFoundError;
