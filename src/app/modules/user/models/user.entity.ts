import { Types, Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { RoleTypeEnum } from '../../../shared/enums/role-type.enum';

@Schema({
  timestamps: true,
  versionKey: false,
})
export class User {
  @Prop({ type: String, required: true, trim: true })
  firstName: string;

  @Prop({ type: String, required: true, trim: true })
  lastName: string;

  @Prop({ type: String, required: true, unique: true, trim: true })
  email: string;

  @Prop({ type: String, required: true, unique: true, trim: true })
  phone: string;

  @Prop({ type: String, required: true, trim: true })
  password: string;

  @Prop({ type: String, required: true, enum: Object.values(RoleTypeEnum) })
  role: RoleTypeEnum;

  @Prop({ type: Boolean, default: false })
  isPhoneVerified: boolean;

  @Prop({ type: Boolean, default: false })
  isEmailVerified: boolean;

  @Prop({ type: Types.ObjectId, ref: 'Vendor', autopopulate: true })
  vendor: Types.ObjectId;
}

type UserDocument = User & Document;

const UserSchema = SchemaFactory.createForClass(User);

export { UserDocument, UserSchema };
