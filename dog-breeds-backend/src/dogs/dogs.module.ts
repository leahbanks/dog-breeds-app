import { Module } from '@nestjs/common';
import { DogsController } from './controllers/dogs/dogs.controller';

@Module({
  controllers: [DogsController]
})
export class DogsModule {}
