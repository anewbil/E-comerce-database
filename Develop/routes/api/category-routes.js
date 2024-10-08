const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/',async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const allCategories=await Category.findAll({
      include:[Product]
    })
    res.status(200).json(allCategories)
  } catch (err) {
    console.error(err)
    res.status(500).json()
  }
});

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const oneCategory=await Category.findOne({
      where:{id:req.params.id},
      include:[Product]
    })
    res.status(200).json(oneCategory)
  } catch (err) {
    console.error(err)
    res.status(500).json()
  }
});

router.post('/', async(req, res) => {
  // create a new category
  try {
    const createCategory=await Category.create(req.body)
    res.status(200).json(createCategory)
  } catch (err) {
    console.error(err)
    res.status(500).json()
  }
});

router.put('/:id',async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategory=await Category.update(req.body,{
      where:{id:req.params.id}
    })
    res.status(200).json(updateCategory)
  } catch (err) {
    console.error(err)
    res.status(500).json()
  }
});

router.delete('/:id',async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCategory=await Category.destroy({
      where:{id:req.params.id}

    })
    res.status(200).json(deleteCategory)
  } catch (err) {
    console.error(err)
    res.status(500).json()
  }
});

module.exports = router;
