const userModel = require("../model/usermodel");

exports.getAllUsers=async(req,res)=>{
    try{
       
        let data= await userModel.find();

         res.status(200).send(data)
    }
    catch(error){

    }
}
module.exports.createUser=async(req,res)=>{
    try{
        
        let data=req.body;
        let {name}= req.body;
        let file= req.file;

        console.log("re",file)


        let filepath= 'http://localhost:3000/' +file.path 
        console.log("re",filepath)

        let find= await userModel.findOne({name});

        if(find){
            return res.status(400).json({ message: 'Username already exists' });
        }

        let create = await userModel.create(req.body);

        res.status(200).send(create)

    }
    catch(error){
        res.status(400).send({message:error.message})
    }
}


exports.getUserById=async(req,res)=>{
    try{
        
        let id= req.params.id;

        let data = await userModel.findById(id);

        res.status(200).send(data)


    }
    catch(error){

    }
}


exports.updateUser=async(req,res)=>{
    try{

        let id= req.params.id;

        let data = await userModel.findByIdAndUpdate(id,req.body);

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



