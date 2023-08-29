module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
  }, {
    /*defaultScope: {
      order: [['id', 'ASC']]
    },*/
    timestamps: false,
    tableName: 'categories',
    underscored: true,
  });

  return Category;
};
