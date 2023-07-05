import { validateBody } from "./validateBody";
import { upload } from "./upload";
import { isValidId } from "./isValidId";
import { authenticate } from "./authenticate";

export const middlewares = {
  validateBody,
  upload,
  isValidId,
  authenticate,
};
