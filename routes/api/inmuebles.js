const inmueble = require('../../models/inmueble.model');

const router = require('express').Router();

router.get('/', async (req , res) => {
    try {
    const inmuebles = await inmueble.find();
    res.json(inmuebles);
    }
    catch (error) {
        res.json({fatal:error.message})
    }
});

router.get('/:inmuebleId', async (req, res) => {
    const {inmuebleId} = req.params;
    try {
        const inmuebles = await inmueble.findById(inmuebleId);
        res.json(inmuebles);

    } catch (error) {
        res.json({fatal:error.message})
    }
})


router.post('/', async (req , res) => {
    try {
        const result = await inmueble.create(req.body);
        res.json(result);
        }
        catch (error) {
            res.json({fatal:error.message})
        }
});

router.put('/:inmuebleId', async (req , res) => {

    const {inmuebleId} = req.params;
    console.log(inmuebleId);

    try {
        const result = await inmueble.findByIdAndUpdate(
        inmuebleId,req.body, {new:true} );
        res.json(result)
    } catch (error) {
    res.json({fatal:error.message});
    }

});

router.delete('/:inmuebleId', async (req , res) => {
    const {inmuebleId} = req.params;
try {
    const result = await inmueble.findByIdAndDelete(inmuebleId);
    if (!result) {
        return res.json({ fatal: 'El id de productos no existe'});    
    }

    res.json(result);
} catch (error) {
    res.json({fatal: error.message});
}
});

module.exports = router;