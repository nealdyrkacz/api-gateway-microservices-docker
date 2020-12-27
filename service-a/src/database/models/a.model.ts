import { Model, DataTypes, Sequelize } from 'sequelize';

export class A extends Model {
  public id!: string;
  public data!: {};
  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function initA(sequelize: Sequelize): void {
  A.init(
    {
      id: {
        type: DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      data: {
        type: DataTypes.JSONB,
        allowNull: false,
        unique: false,
      },
    },
    {
      sequelize: sequelize,
      tableName: 'a',
    },
  );
}
