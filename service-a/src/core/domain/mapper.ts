/* eslint-disable  @typescript-eslint/no-explicit-any */

export default abstract class Mapper<T> {
  public abstract toDomain(raw: any): any;
  public abstract toDTO(t: T): any;
  public abstract toPersistence(t: T): any;
}
