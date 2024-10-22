import { Types, Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { RoleTypeEnum } from '../../../shared/enums/role-type.enum';

@Schema({
  timestamps: true,
  versionKey: false,
})
export class User {
  @Prop({ type: String, required: true })
  firstName: string;

  @Prop({ type: String, required: true })
  lastName: string;

  @Prop({ type: String, required: true, unique: true })
  email: string;

  @Prop({ type: String, required: true, unique: true })
  phone: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: String, required: true, enum: Object.values(RoleTypeEnum) })
  role: RoleTypeEnum;

  @Prop({ type: Boolean, default: false })
  isPhoneVerified: boolean;

  @Prop({ type: Boolean, default: false })
  isEmailVerified: boolean;

  @Prop({ type: Boolean, default: false })
  isDeleted: boolean;

  @Prop({ type: String })
  address?: string;

  @Prop({ type: String})
  avatar?: string

  @Prop({ type: Types.ObjectId, ref: 'Cart', autopopulate: true })
  carts: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Vendor', autopopulate: true })
  vendor: Types.ObjectId;
}

type UserDocument = User & Document;

const UserSchema = SchemaFactory.createForClass(User);

export { UserDocument, UserSchema };
