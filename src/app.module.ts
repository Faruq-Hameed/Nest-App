import { Module, MiddlewareConsumer, NestMiddleware, NestModule, RequestMethod } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthMiddleware, LoggerMiddleware, logger } from './users/middleware/logger.middleware';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware).
      forRoutes({ path: 'users', method: RequestMethod.GET }, { path: 'users', method: RequestMethod.PUT })
      .apply(logger).forRoutes({ path: 'orders', method: RequestMethod.POST }, { path: 'orders', method: RequestMethod.POST })
      .apply(AuthMiddleware).forRoutes({ path: 'users', method: RequestMethod.PUT })
  }

}
