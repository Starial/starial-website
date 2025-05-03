const ErrorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "BACKEND ERROR";
  const extraDetails = err.extraDetails || "SOMETHING IS WRONG IN THE BACKEND";
  res.status(status).json({ message, extraDetails });
};

module.exports = ErrorMiddleware;
