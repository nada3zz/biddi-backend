import { Injectable } from '@nestjs/common';
import { BaseService } from '../../shared/services/base.service';
import { VendorRepository } from './repository/vendor.repository';
import { VendorDocument } from './models/vendor.entity';

@Injectable()
export class VendorService extends BaseService<VendorDocument, VendorRepository> {
  constructor(protected readonly repository: VendorRepository) {
    super();
  }
}