const router = require('express').Router();

const { 
    getAllThought, 
    getThoughtById, 
    createThought, 
    updateThought,
    deleteThought,
    addReaction,
    removeReaction

} = require('../../controllers/thoughtController');

// /api/thought //
router.route('/').get(getAllThought);

// /api/thought/:id //
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought); 

// /api/thought/:userId //
router.route('/:userId').post(createThought);

// /api/thought/:thoughtId/reaction //
router.route('/:thoughtId/reaction').post(addReaction);

// /api/thought/:thoughtId/reaction/:reactionId //
router.route('/:thoughtId/reaction/:reactionId').delete(removeReaction);

module.exports = router;