let ctrl = {};
ctrl.post = (req, res)=>{
    res.send('Petición Post')
}
ctrl.put = (req, res)=>{
    res.send('Petición Put')
}
ctrl.deletetp = (req, res)=>{
    res.send('Petición Delete')
}
ctrl.get = (req, res)=>{
    res.send('Petición Get')
}

module.exports = ctrl;