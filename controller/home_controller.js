module.exports.home = function(req,res){
    return res.render('home',{
        title: "DSA | home",
        heading : "Data Structure & Algorithms Visualizer"
    })
}