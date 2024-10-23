import { Types, Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({
  timestamps: true,
  versionKey: false,
})
class Vendor {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: String, required: true, unique: true })
  code: string;

  @Prop({ type: String })
  logo:string

  @Prop({ type: String, required: true })
  address:string

  @Prop({ type: String })
  phone?:string

  @Prop([{ type: Types.ObjectId, ref: 'User', autopopulate: true }])
  users: Types.ObjectId[];

  @Prop([{ type: Types.ObjectId, ref: 'Product', autopopulate: true }])
  products: Types.ObjectId[];

}

type VendorDocument = Vendor & Document;

const VendorSchema = SchemaFactory.createForClass(Vendor);

export { Vendor, VendorDocument, VendorSchema };