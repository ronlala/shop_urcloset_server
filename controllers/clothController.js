const Closet = require("../models/closetModel");


// Get all clothing that was 

const getAllClothing = async (req,res,next) => {
  
    try{
        
    const wardrobe = await Closet.find({});
    
        return res.status(200).json({
      success:{
      Message:"This Route points to all Closet"},
      data:{wardrobe},
      statusCode: 200,
  });
} catch (error){

    return next(error)
}
};
// Get clothing Item by ID
const getClothing = async(req,res,next) => {
    const {_id} = req.param;
    try{
           
        if(!_id){
            throw new Error("Id is required");
        }
        const closet = closet.findbyID(_id)
        if (!closet) {
            throw new Error("Cloting not found");
        
        }
        
        return res.status(200).json({
                success:{message: "found Item"},
                data: {Closet},
            });
        } catch (error){
        
        return next(error)
        }
    };
// Create new clothing item

const createClothing = async(req,res,next) => {
    const {brand,
        color,
        size,
        category,
        purchdate ,
        price,
        image,} = req.body;



try{
if  (!brand||!color||!size){
    throw new Error("Missing some Required information try again")
}

 const newClothing = new Closet({
        brand,
        color,
        size,
        category,
        purchdate ,
        price,
        image,
});
await newClothing.save()


    return res.status(201).json({
        success:{message: "New Clothing has been added to the Closet "},
        data: {newClothing},
    })
} catch (error){
    return next (error)
}
};

//update clothing controller
const updateClothing = async(req,res,next) => {
    const{id} = req.params;
    const {brand,
        color,
        size,
        category,
        purchdate ,
        price,
        image,} = req.body;


try{
// fix the if statement
    if  (!brand||!color||!size){
    throw new Error("Missing some Required information try again")
}
    const updateClothing = await Closet.findByIDAndUpdate(
        _id,
        {
        $set:{brand,
        color,
        size,
        category,
        purchdate ,
        price,
        image,
      }
    },
    {new: true}
);
  
    if (!updatedClothing){
        throw new Error("Clothing Item not found");
    }
    return res.status(201).json({
        success:{message: "Something New Added to your closet"},
        data: {updatedClothing},
        statusCode: 201
    });
} catch (error){

    return next(error);

}
};
//Delete clothing controller
const deleteClothing = async (req,res,next) => {
    
    const{_id} = req.params;

    
    try {
    if (!_id){
        throw new Error("Clothing Item not found");
    }
       
       
     await Closet.findByIDAndDelete(_id);
        return res.status(200).json({
        success: { message: "Item has been deleted from your closet"},
        });
    } catch (error) {
  
        return next(error);
    }
};

module.exports ={getAllClothing, getClothing, createClothing, updateClothing, deleteClothing};
