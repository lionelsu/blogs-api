module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      field: 'post_id',
      references: {
        model: 'blog_posts',
        key: 'id',
      },
    },
    categoryId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      field: 'category_id',
      references: {
        model: 'categories',
        key: 'id',
      },
    },
  }, {
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true,
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      through: PostCategory, as: 'blogPosts',
      foreignKey: 'categoryId', otherKey: 'postId',
    });

    models.BlogPost.belongsToMany(models.Category, {
      through: PostCategory, as: 'categories',
      foreignKey: 'postId', otherKey: 'categoryId',
    });
  };

  return PostCategory;
};
