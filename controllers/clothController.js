const { get } = require("mongoose");
const Closet = require("../models/closetModel");


// Get all clothing that was 

const getAllClothing = async (req,res,next) => {
  
    try{
        const Closet = await Closet.find({});
    return res.status(200).json({
      success:{
      Message:"This Route points to all Closet"},
      data:{Closet},
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
        // const Closet = ClosetLibrary.find(ClosetLibrary =>
        //     ClosetInventory._id ===Number( _id));
           
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
    const {title , author, publisher,  genre, pages, rating, synopsis, image} = req.body;



try{
if  (!title||!author||!pages){
    throw new Error("Missing some Required information try again")
}

 const newClothing = new Closet({
        brand,
        type,
        required,
        trim,
        color,
        publisher,
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
    const {title , author, publisher,  genre, pages, rating, synopsis, image} = req.body;


try{

    if  (!title||!author||!pages){
    throw new Error("Missing some Required information try again")
}
// fix this line here to reflect your project
    const updateClothing = await Closet.findByIDAndUpdate(
        _id,
        {
        $set:{brand,
        type,
        required,
        trim,
        color,
        publisher,
        size,
        category,
        purchdate ,
        price,
        image,
      }
    },
    {new: true}
);
    // const Closet = ClosetData.find((Closet) => Closet._id === _id);
    // ClosetData[foundClosetIndex] = newCloset;
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
