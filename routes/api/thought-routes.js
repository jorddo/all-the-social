const router = require('express').Router();
const {
  addThought,
  getAllThought,
  removeThought,
  getThoughtById,
  updateThought,
} = require('../../controllers/thought-controller');

// /api/thoughts
router.route('/').get(getAllThought).post(addThought);

// /api/thoughts/<ThoughtId>
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

module.exports = router;
