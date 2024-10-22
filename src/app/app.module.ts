import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Configs from './shared/config';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerMiddleware } from './shared/middlewares/http-logger.middleware';
import { HttpExceptionFilter } from './shared/filters/http-exception.filter';
import { MongooseErrorFilter } from './shared/filters/mongoose-error.filter';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UserModule } from './modules/user/user.module';
import { VendorModule } from './modules/vendor/vendor.module';
import { ProductModule } from './modules/product/product.module';
import { CartModule } from './modules/cart/cart.module';
import mongoosePaginate from 'mongoose-paginate-v2';
import mongooseAutoPopulate from 'mongoose-autopopulate';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: Configs,
      ignoreEnvFile: false,
      isGlobal: true,
      cache: true,
      envFilePath: ['.env'],
      expandVariables: true,
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.get<string>('DATABASE_URL'),
        connectionFactory: (connection) => {
          //connection.plugin(mongoosePaginate);
          //connection.plugin(mongooseAutoPopulate);
          console.log(
            `App connected to MongoDB on ${config.get<string>('DATABASE_URL')}`,
            'MONGODB',
          );
          return connection;
        },
      }),
    }),
    ServeStaticModule.forRoot({
      renderPath: '/public',
      rootPath: join(__dirname, '..'),
    }),

    UserModule,
    VendorModule,
    ProductModule,
    CartModule,
  ],
  providers: [
    ConfigService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: MongooseErrorFilter,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
