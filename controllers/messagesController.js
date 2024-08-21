const Message = require('../models/message');

exports.createMessage=async(req,res)=>{
    const{name,email,phone,message}=req.body;
    if (!name || !email || !message) {
        return res.status(400).send('Name, email, and message are required.');
      }
    const newMessaage=new Message({ 
        name: name,
    email: email,
    phone: phone,
    message: message,
    });
    try {
        // Save the item to the database
        const savedMessage = await newMessaage.save();
        res.status(201).json(savedMessage);
      } 
    catch(err)
    {
        res.status(500).json(err)
    }
}

exports.getAllMessages=async(req,res)=>{
    const messages=await Message.find();
    res.status(200).json(messages);
}
//find and update
// router.put('/update/:id',async(req,res)=>{
//     try{
//        await Product.findByIdAndUpdate(req.params.id,req.body);
//         res.status(202).json('updated');

//     }catch(err){
//     res.status(500).send(err.message);
//     }    
// }); 
// //soft delete 
// router.delete('/delete/:id',async(req,res)=>{
//     try{
//         await Product.findByIdAndUpdate(req.params.id,{isDel:true});
//          res.status(203).json('deleted');
 
//      }catch(err){
//      res.status(500).send(err.message);
//      }     
// }); 
