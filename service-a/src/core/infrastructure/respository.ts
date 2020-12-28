/* eslint-disable  @typescript-eslint/no-explicit-any */

export default interface Repository<T> {
  exists(id: string): Promise<boolean>;
  findById(id: string): Promise<any>;
  findAll(): Promise<any>;
  delete(t: T): Promise<any>;
  save(t: T): Promise<any>;
}
