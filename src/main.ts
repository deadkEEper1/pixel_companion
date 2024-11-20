import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

// Enable CORS with specific configuration
  app.enableCors({
    origin: '*', // Allow frontend origin
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
