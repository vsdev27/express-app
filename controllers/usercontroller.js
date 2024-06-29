const usermodel = require("../model/usermodel")

exports.getAllUsers=async(req,res)=>{
    try{
       
        let data= await usermodel.find();

         res.status(200).send(data)
    }
    catch(error){

    }
}

exports.createUser=async(req,res)=>{
    try{
        
        let data=req.body;

        let create = await usermodel.create(req.body);

        res.status(200).send(create)

    }
    catch(error){
        res.status(400).send({message:error.message})
    }
}


exports.getUserById=async(req,res)=>{
    try{
        
        let id= req.params.id;

        let data = await usermodel.findById(id);

        res.status(200).send(data)


    }
    catch(error){

    }
}


exports.updateUser=async(req,res)=>{
    try{

        let id= req.params.id;

        let data = await usermodel.findByIdAndUpdate(id,req.body);

        res.status(200).send(data)


    }
    catch(error){

    }
}

exports.deleteUser=async(req,res)=>{
    try{
        

        let data={}

        return{
            data
        }

    }
    catch(error){

    }
}



