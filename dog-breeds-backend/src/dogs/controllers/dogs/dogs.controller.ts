import { Controller, Get } from '@nestjs/common';
import { DogsService } from 'src/dogs/services/dogs.service';

//controller decorator accepts a prefix which is the base path to access the controller
//everthing that is called with '/dogs' will hit this controller
@Controller('dogs')
export class DogsController {

    //uses dependency injection to to retrieve the dogs service
    constructor(private dogsService: DogsService) {}

    //implement getDogs() method
    //decorated with @Get to integrate with /dogs endpoint
    @Get()
    getDogs() {
        return this.dogsService.getDogs();
    }
}
