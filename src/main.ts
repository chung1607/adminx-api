import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for frontend connections
  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:4200', 'http://localhost:5173', 'http://localhost:8080'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
  });
  
  // Add global prefix for all endpoints
  app.setGlobalPrefix('api');
  
  await app.listen(3000);
}
bootstrap();
