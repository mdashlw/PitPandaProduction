const router = require('express').Router();
const getUsername = require('../apiTools/playerDocRequest');

router.get('/:uuid', async (req, res) => {
    const user = await getUsername(req.params.uuid);
    if (user.error) return res.status(400).json({ success: false, error: user.error });

    res.status(200).json({ success: true, name: user.displayName });
});

module.exports = router;