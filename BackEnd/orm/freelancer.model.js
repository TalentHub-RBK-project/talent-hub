// Define and export the sequelize model that represents the table freelances.

module.exports = (sequelize, DataTypes) => {
    const Freelancer = sequelize.define("freelancer", {
      
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        adress: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        phoneNumber: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        imageUrl: {
          type: DataTypes.STRING,
          allowNull: false,
        },
    });
  
    return Freelancer;
  };