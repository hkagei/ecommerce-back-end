const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  
    // find all library cards and perform a JOIN to include all associated Readers
  Tag.findAll({
      include: [{ model: Product }],
    })
  .then((tags) => res.json(tags))
  .catch((err) => res.status(400).json(err))

  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id, {
      include: [{ model: Product}]
    })
  .then((tags) => res.json(tags))
  .catch((err) => res.status(400).json(err))

    if (!tagData) {
      res.status(404).json({ message: 'No product found!'});
      return;
    }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then((tags) => res.json(tags))
  .catch((err) => res.status(400).json(err))
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      tag_id: req.body.tag_id,

    }
  )
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      tag_id: req.body.tag_id
    }
  })
  .then((deletedTag) => {
    res.json(deletedTag);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
