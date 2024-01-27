import {HttpModule} from '@nestjs/axios';
import {HtppConfigService} from 'src/httpService.config';
import { Module } from '@nestjs/common';
import { TestsController } from './tests/tests.controller';
import { TestsService } from './tests/tests.service';

@Module({
  imports:[
    HttpModule.registerAsync({
      useClass: HtppConfigService,
    }
    ),
    ShareModuleModule
  ],
  controllers: [TestsController],
  providers: [TestsService]
})
export class ShareModuleModule {}
