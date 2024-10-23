import { Types, Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
  versionKey: true,
})
class Cart {
  @Prop({ type: Types.ObjectId, ref: 'Product', required: true })
  product: Types.ObjectId;

  @Prop({ type: Number, required: true })
  quantity: number;

  @Prop({ type: Types.ObjectId, ref: 'User', autopopulate: true })
  users: Types.ObjectId;
}


type CartDocument = Cart & Document;

const CartSchema = SchemaFactory.createForClass(Cart);

export { Cart, CartDocument, CartSchema };
