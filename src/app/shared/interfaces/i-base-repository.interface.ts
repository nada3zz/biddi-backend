import { Types, DeleteResult } from 'mongoose';
import { IPaginateOptions } from './i-paginate-options';
import { IPaginatedInterface } from './i-paginate-result.interface';

export interface IBaseRepository<T> {
  create(doc: Partial<T>): Promise<T>;
  findById(id: string | Types.ObjectId, projection?: any): Promise<T | null>;
  findOne(filter: object): Promise<T | null>;
  find(filter: object): Promise<T[]>;
  updateById(id: string | Types.ObjectId, update: Partial<T>): Promise<T | null>;
  updateOne(filter: object, update: Partial<T>): Promise<T | null>;
  updateMany(filter: object, update: Partial<T>): Promise<any>;
  deleteById(id: string | Types.ObjectId): Promise<T | null>;
  deleteOne(filter: object): Promise<DeleteResult>;
  deleteMany(filter: object): Promise<any>;
  paginate(
    filter: object,
    paginateOptions: IPaginateOptions,
  ): Promise<IPaginatedInterface<T>>;
}
