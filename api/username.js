const router = require('express').Router();
const {hypixelAPI} = require('./apiTools');
const Pit = require('./structures/Pit');

router.use('/:tag', (req,res)=>{
    hypixelAPI(req.params.tag).then(json=>{
        const target = new Pit(json);
        res.status(200);
        if(target.error) res.json({success:false,error:target.error});
        else {
            res.json({success:true,name:target.name,ranked:target.formattedName,leveled:target.levelFormattedName})
            target.loadNBTInventorys();
        }
    });
});

module.exports = router;