import { sendError } from "../utils/apiResponse.js";

const errorHandler = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Error interno del servidor";

  console.error(error);

  return sendError(res, {
    statusCode,
    error: message,
  });
};

export default errorHandler;