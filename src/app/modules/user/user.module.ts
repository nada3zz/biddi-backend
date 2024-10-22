import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './repository/user.repository';
import { User, UserSchema, UserDocument } from './models/user.entity';
import { MongooseModule, Schema } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), // Register schema here
    ],
    providers: [UserService, UserRepository],
    controllers: [UserController],
    exports: [UserService, UserRepository],
})
export class UserModule {}
