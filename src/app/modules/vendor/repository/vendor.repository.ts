import { PaginateModel } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseRepository } from '../../../shared/repositories/base.repository';
import { Vendor, VendorDocument } from '../models/vendor.entity';

@Injectable()
export class VendorRepository extends BaseRepository<VendorDocument> {
  constructor(
    @InjectModel(Vendor.name)
    protected readonly model: PaginateModel<VendorDocument>,
  ) {
    super(model);
  }
}
