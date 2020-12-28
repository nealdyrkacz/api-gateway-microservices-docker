import { ADTO } from '../dtos/a.dto';
import { A } from '../domain/a.domain';
import Mapper from '../../core/domain/mapper';

export class AMap extends Mapper<A> {
  public toDomain(raw: any): A {
    return A.create({
      id: raw.id,
      data: raw.data,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    });
  }

  public toDTO(a: A): ADTO {
    return {
      id: a.getId(),
      data: a.getData(),
      createdAt: a.getCreatedAt(),
      updatedAt: a.getUpdatedAt(),
    };
  }

  public toPersistence(a: A): any {
    return {
      id: a.getId(),
      data: a.getData(),
    };
  }
}
