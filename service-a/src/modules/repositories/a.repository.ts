import { db } from '../../database/models/';
import { AMap } from '../mappers/a.map';
import { A } from '../domain/a.domain';
import Repository from '../../core/infrastructure/respository';

export type IARepository = Repository<A>;

export class ARepository implements IARepository {
  private aMap: AMap;

  constructor() {
    this.aMap = new AMap();
  }

  public async exists(id: string): Promise<boolean> {
    try {
      const result = await db.A.findOne({
        where: { id: id },
      });
      return !!result === true;
    } catch (e) {
      console.error(e);
      throw new Error();
    }
  }

  public async findById(id: string): Promise<A> {
    try {
      const user = await db.A.findOne({
        where: { id: id },
      });

      if (!!user === false) {
        return null;
      }

      return this.aMap.toDomain(user);
    } catch (e) {
      console.error(e);
      throw new Error();
    }
  }

  public async findAll(): Promise<A[]> {
    try {
      const as = await db.A.findAll();
      return as.map(a => this.aMap.toDomain(a));
    } catch (e) {
      console.error(e);
      throw new Error();
    }
  }

  public async delete(a: A): Promise<void> {
    //delete user Associations using respective Repos
    //delete user
  }

  public async save(a: A): Promise<A> {
    const exists = await this.exists(a.getId());
    const rawAData = this.aMap.toPersistence(a);

    if (exists) {
      const sequelizeA = await db.A.findOne({
        where: { id: a.getId() },
      });

      try {
        await sequelizeA.update(rawAData);
      } catch (e) {
        console.error(e);
        throw new Error();
      }
    } else {
      await db.A.create(rawAData);
    }

    return a;
  }

  private async rollbackSave(a: A): Promise<void> {
    //rollback a save that had an error from the save function
    //delete all newly created db objects and new associations
    //if update only remove new associations?
  }
}
