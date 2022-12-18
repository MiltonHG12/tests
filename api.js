//api para rutas

const express =require('express');
const router=express.Router();

router.get('/', (req,res) => {
	res.json({
		myapi:'Api Test OK'
	});
});
module.exports=router;