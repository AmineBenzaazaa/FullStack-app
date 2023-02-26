module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define("Comments", {
      Comment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Comments;
  };
  