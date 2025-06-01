const { get } = require("mongoose");
const Book = require("../models/closetModel");


// Get all clothing that was 

const getAllClothing = async (req,res,next) => {
  
    try{
        const books = await Book.find({});
    return res.status(200).json({
      success:{
      Message:"This Route points to all books"},
      data:{books},
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
        // const books = booksLibrary.find(booksLibrary =>
        //     bookInventory._id ===Number( _id));
           
        if(!_id){
            throw new Error("Id is required");
        }
        const book = book.findbyID(_id)
        if (!book) {
            throw new Error("Cloting not found");
        
        }
        
        return res.status(200).json({
                success:{message: "found Item"},
                data: {book},
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

 const newClothing = new Book({
   title,
   author,
   publisher,
   genre,
   pages,
   rating,
   synopsis,
   image
});
await newClothing.save()


    return res.status(201).json({
        success:{message: "New book has been added to the Libray "},
        data: {newBook},
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
    const updateClothing = await Book.findByIDAndUpdate(
        _id,
        {
        $set:{title,
        author,
        publisher,
        genre,
        pages,
        rating,
        synopsis,
        image
      }
    },
    {new: true}
);
    // const book = booksData.find((book) => book._id === _id);
    // booksData[foundBookIndex] = newBook;
    if (!updatedClothing){
        throw new Error("Clothing Item not found");
    }
    return res.status(201).json({
        success:{message: "Something New Added to your closet"},
        data: {updatedBook},
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
        throw new Error("Book not found id needed");
    }
        // const removeBook =books.filter((book) => book._id !== _id);
        // console.log(removeBook)
     await Book.findByIDAndDelete(_id);
        return res.status(200).json({
        success: { message: " Book has been deleted from the library"},
        });
    } catch (error) {
  
        return next(error);
    }
};

module.exports ={getAllClothing, getClothing, createClothing, updateClothing, deleteClothing};
