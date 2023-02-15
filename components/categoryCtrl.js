const Category = require("../models/categoryModel");

const categoryCtrl = {
  createCategory: async (req, res) => {
    try {
      const { name } = req.body;
      if (!name)
        return res
          .status(400)
          .json({ msg: "Please provide the name payload " });

      const checkName = await Category.findOne({ name: name });
      if (checkName)
        return res
          .status(400)
          .json({ msg: `This category with name: ${name} already exists` });

      const newCategory = new Category({
        name,
      });

      await newCategory.save();

      res.status(200).json({
        status: "success",
        message: `${name} category created successfully`,
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  getCategories: async (req, res) => {
    try {
      const filter = {};
      const categoryCount = await Category.countDocuments(filter);
      if (categoryCount < 1)
        return res.status(400).json({
          msg: "No category found, Please populate the database with new categories",
        });

      const categories = await Category.find().sort({ _id: -1 });

      res.status(200).json({
        status: "success",
        data: categories,
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  updateCategory: async (req, res) => {
    try {
      const { id } = req.params.id;
      if (!id)
        return res.status(400).json({ msg: "please include the id param" });

      if (!req.body)
        return res
          .status(400)
          .json({ msg: "Please a payload is needed to update this category" });

      const categoryName = await category.findById({ _id: id });
      if (!categoryName)
        return res.status(400).json({
          msg: "this category cannot be found or it has been deleted, please create a new category",
        });

      const category = await Category.findByIdAndUpdate(
        { _id: id },
        { ...req.body }
      );
      if (!category)
        return res.status(400).json({
          msg: "this category cannot be found or it has been deleted, please create a new category",
        });

      res.json({
        status: "success",
        message: `category with name: ${categoryName.name} has been updated successfully`,
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = categoryCtrl;
