import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VendorController } from './vendor.controller';
import { VendorService } from './vendor.service';
import { Vendor, VendorSchema } from './models/vendor.entity';
import { VendorRepository } from './repository/vendor.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Vendor.name, schema: VendorSchema }]),
  ],
  providers: [VendorService, VendorRepository],
  controllers: [VendorController],
  exports: [VendorService, VendorRepository],
})
export class VendorModule {}
