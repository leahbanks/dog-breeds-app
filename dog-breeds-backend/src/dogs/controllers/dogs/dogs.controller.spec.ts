import { Test, TestingModule } from '@nestjs/testing';
import { DogsController } from './dogs.controller';

describe('DogsController', () => {
  //declares controller variable with type 'DogsController'
  let controller: DogsController;

  //before each 'hook' - calls this callback function before each test
  beforeEach(async () => {
    // before each test, TestingModule is created -> creates a mock module
    const module: TestingModule = await Test.createTestingModule({
      //dependencies
      controllers: [DogsController],
      //complies everthing - once it is compiled, it retrieves the actual controller from the module by calling the get method and returns the instance of the dogs controller
    }).compile();

    //.get takes a type or a token - this function is passed with the type + it will look for the correct instance and return the controller
    controller = module.get<DogsController>(DogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
