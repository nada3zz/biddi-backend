import { PartialType } from '@nestjs/swagger';
import { Vendor } from '../models/vendor.entity';

export class VendorDto extends PartialType(Vendor) {}
