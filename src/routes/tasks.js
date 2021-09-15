const express = require('express');
const router = express.Router();

const Task = require('../models/Task');
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
    // console.log(tasks);
    //es equivalente selectr from * // tener en cuenta la asincronidad se puede utilizar calback o promesas o async o await
    // as la consulta cuand terminaes almacenala en la const tasks
});
router.get('/:id', async (req, res) =>{
    const task = await Task.findById(req.params.id);
    res.json(task);
})
router.post('/', async (req, res) => {
    const {title, description} = req.body;
    const task = new Task({title, description});
    await task.save(); //esto lo va almacenar y await va tomar algo de tiempo
    res.json({status: 'task saved'});
    // console.log(task);
    // res.json('received');
});
    // otra forma de representarlo
    // new Task({
    //     title: title,
    //     description: description
    // })
// router.put('/:id', async (req, res) =>{
//     const {title, description} = req.body;
//     const newTask = {title, description};
//     await Task.findByIdAndUpdate(req.params.id, newTask); //con este tengo el id para actyaliza
//     res.json({status: 'task updated'});
// });
router.put('/:id', async (req, res) =>{
    await Task.findByIdAndUpdate(req.params.id, req.body); //con este tengo el id para actyaliza
    res.json({status: 'task updated'});
});
router.delete('/:id', async (req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({status: 'Task Deleted'})
});
module.exports = router;