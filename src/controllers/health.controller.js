import { sendSuccess } from "../utils/apiResponse.js";

export const getHealth = (req, res) => {
  return sendSuccess(res, {
    statusCode: 200,
    message: "API funcionando correctamente",
    data: {
      environment: process.env.NODE_ENV || "development",
      timestamp: new Date().toISOString(),
    },
  });
};