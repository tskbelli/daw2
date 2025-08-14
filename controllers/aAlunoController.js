import Aluno from'../models/aluno.js'
export default class AlunoController{
 constructor(caminhobase = 'aluno/')
{
this.caminhobase = caminhobase
this.openAdd = async(req, res)=>{res.render(caminhobase + "add")
}
this.add = async(req, res)=>{
    await Aluno.create({
        nome: req.body.matricula
    })
    res.redirect('/'+caminhobase + 'add');
}
this.list = async(req,res)=>{
    const resultado = await Aluno.find({})
    res.render(caminhobase + 'lst', {Aluno:resultado})
}

}}
