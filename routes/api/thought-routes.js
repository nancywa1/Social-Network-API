const router = require("express").Router();
const {
  addThought,
  getAllThought,
  getThoughtById,
  updateThoughtById,
  removeThoughtById,
  addReactionByThoughtId,
  deleteReactionById,
} = require("../../controllers/thoughts-contoller");

router.route("/").get(getAllThought).post(addThought);
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThoughtById)
  .delete(removeThoughtById);

router.route("/:id/reactions").post(addReactionByThoughtId);
router.route("/:id/reactions/:reactionId").delete(deleteReactionById);

module.exports = router;
