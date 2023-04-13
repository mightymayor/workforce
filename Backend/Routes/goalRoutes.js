const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal} = require ('../Controllers/goalsControllers')

// router.route('/').get(getGoals).post(setGoals)
// router.route('/:id').delete(deleteGoal).put(setGoal)
router.get('/', getGoals)
router.post('/', setGoal)
router.put('/:id', updateGoal)
router.delete('/:id', deleteGoal)

module.exports = router