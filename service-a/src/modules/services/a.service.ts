import { AMap } from '../mappers/a.map';
import { ADTO } from '../dtos/a.dto';
import { ARepository } from '../repositories/a.repository';

export class AService {
  private aMap: AMap;
  private aRepository: ARepository;
  constructor() {
    this.aMap = new AMap();
    this.aRepository = new ARepository();
  }
  public async findById(id: string): Promise<ADTO> {
    const a = await this.aRepository.findById(id);
    return this.aMap.toDTO(a);
  }
  public async findAll(): Promise<ADTO[]> {
    const as = await this.aRepository.findAll();
    return as.map(a => this.aMap.toDTO(a));
  }
}
