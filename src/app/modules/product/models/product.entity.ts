import { Types, Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
  versionKey: false,
})
export class Product {
  @Prop({ type: String, required: true, trim: true })
  name: string;

  @Prop({ type: String, required: true, unique: true, trim: true })
  slug: string;

  @Prop({ type: [String], required: true})
  images: string[];

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: Types.ObjectId, ref: 'Vendor', autopopulate: true })
  Vendor: Types.ObjectId;

  @Prop({ type: Number, required: true })
  price: number;

}

type ProductDocument = Product & Document;

const ProductSchema = SchemaFactory.createForClass(Product);

export { ProductDocument, ProductSchema };
