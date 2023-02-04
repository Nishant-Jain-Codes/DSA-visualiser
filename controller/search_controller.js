module.exports.search = function(req,res){
    return res.render('search',{
        title: "DSA | search",
        heading : "Search Algorithms Visualized"
    })
}