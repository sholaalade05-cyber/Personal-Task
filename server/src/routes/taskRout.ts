// taskrout.ts - CONNECTS ENDPOINT TO THE CONTROLLER FUNCTION

import { Router } from "express";
import {
  createTask,
  deleteTask,
  getAllTask,
  getTaskById,
  updateTask,
} from "../controllers/taskControler";
import { validId } from "../middleware/validated";

// All paths here start with /api/tasks (see app.ts)
// This follows RESTAPI

const router = Router();

router.post("/", createTask);
router.get("/allTasks", getAllTask);

// validatId runs first; the controller only runs if the id is valid
router.patch("/:id", validId, updateTask);
router.delete("/:id", validId, deleteTask)
router.get("/:id", validId, getTaskById)
export default router;
