const express = require('express');
const router = express.Router();

const inMemoryData = [
    {
        name: "Axe",
        talent: "Strength"
    },
    {
        name: "Rikimaru",
        talent: "Agility"
    }
];

router.get('/', (req, res, next) => {
    res.status(200).json(inMemoryData)
});

router.get('/:name', (req, res, next) => {
    
    const { name } = req.params;
    
    const query = inMemoryData.filter(p => p.name === name);

    if(name !== null || '') {

        if(query.length === 0)
        return res.status(200).json({
            message: "Hero not found!"
        })

        return res.status(200).json(inMemoryData.filter(p => p.name === name));
    }

    res.status(404).json({
        message: "No parameter present"
    })
})


module.exports = router;