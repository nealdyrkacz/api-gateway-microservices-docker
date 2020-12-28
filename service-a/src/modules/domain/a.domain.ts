import { v4 as uuidv4 } from 'uuid';
export interface AProps {
  id: string;
  data: {};
  createdAt?: Date;
  updatedAt?: Date;
}

export class A {
  private id: string;
  private data: {};
  private createdAt: Date;
  private updatedAt: Date;

  private constructor(props: AProps) {
    const { id, data, createdAt, updatedAt } = props;
    this.id = id ? id : uuidv4();
    this.data = data;

    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public static create(props: AProps): A {
    try {
      const a = new A(props);
      return a;
    } catch (e) {
      console.error(e);
      throw new Error('Could not create a new A');
    }
  }

  public getId(): string {
    return this.id;
  }

  public getData(): {} {
    return this.data;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getUpdatedAt(): Date {
    return this.updatedAt;
  }
}
