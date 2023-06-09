import { Test, TestingModule } from '@nestjs/testing';
import { DogsService } from './dogs.service';

describe('DogsService', () => {
  //declares service variable with type 'DogsService'
  let service: DogsService;

  //before each 'hook' - calls this callback function before each test
  beforeEach(async () => {
    // before each test, TestingModule is created -> creates a mock module
    const module: TestingModule = await Test.createTestingModule({
      //dependencies
      providers: [DogsService],
      //complies everthing - once it is compiled, it retrieves the actual service from the module by calling the get method and returns the instance of the dogs service
    }).compile();

    //.get takes a type or a token - this function is passed with the type + it will look for the correct instance and return the service
    service = module.get<DogsService>(DogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getDogs', () => {
    it('should return an array', () => {
      const dogs = service.getDogs();
      expect(Array.isArray(dogs)).toBe(true);
    });
    it('should have the correct length', () => {
      const dogs = service.getDogs();
      expect(dogs).toHaveLength(8);
    });
    it('should contain dog objects', () => {
      const dogs = service.getDogs();
      dogs.forEach((dog) => {
        expect(typeof dog).toBe('object');
      });
    });
    it('should have the correct properties on each dog object', () => {
      const dogs = service.getDogs();
      dogs.forEach((dog) => {
        expect(dog).toHaveProperty('breed');
        expect(dog).toHaveProperty('image');
        expect(dog).toHaveProperty('bio');
        expect(dog).toHaveProperty('id');
      });
    });
    it('should have the correct values for each property', () => {
      const dogs = service.getDogs();
      const daschund = dogs[1];
      expect(daschund.breed).toBe('Daschund');
      expect(daschund.id).toBe(2);
    });
  });
});
