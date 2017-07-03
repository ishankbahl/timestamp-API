var results=require(".././functions/mainFunction");
module.exports=function(app){
    app.get("/:dateInURL",function(req,res){
        res.send(JSON.stringify(results(req.params.dateInURL)));
    });
};