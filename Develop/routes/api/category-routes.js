const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
Category.findAll({
      include: [{ model: Product }]
    })
  .then((categories) => res.json(categories))
  .catch((err) => res.status(400).json(err))
});
    
  // be sure to include its associated Products

router.get('/:id', (req, res) => {

  Category.findByPk(req.params.id, {
      include: [{ model: Product}]
    })
   .then((categories) => res.json(categories))
   .catch((err) => res.status(400).json(err))

  if (!categoryData) {
  res.status(404).json({ message: 'No product found!'});
    return;
    }
    
    
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  Category.create(req.body)
  .then((categories) => res.json(categories))
  .catch((err) => res.status(400).json(err))
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
    Category.update(
      {
        category_name: req.body.category_name,

      },
    )
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      category_id: req.body.category_id
    }
  })
  .then((deletedCategory) => {
    res.json(deletedCategory);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
