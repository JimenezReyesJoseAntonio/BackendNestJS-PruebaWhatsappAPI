import { Injectable } from "@nestjs/common";
import {HttpModuleOptions,HttpModuleOptionsFactory} from '@nestjs/axios';

@Injectable()

export class HtppConfigService implements HttpModuleOptionsFactory {
    createHttpOptions(): HttpModuleOptions {
        return{
            headers:{
                'Authorization': 'Bearer EAAVggFs6MZAwBO2tEkRBQysYpRefRsjr7gxrDL6zhbZBnZBGvJqEInK99hTzImLEZAcfyyHzHwfuRKTpYBEHrv10LOjqGxgRLSn3hxfDNmyG8utrDSByYMTsIWh0TsFdzsPJjdZAPjUwV9Jv4fcpHZBY7LZBbjjrvSjZAjsgpLh6ZC6C1CQftsj9Cft2w5sVw2VsFIYzXmjzSi1moCoPRFEgZD',
                'Content-Type': 'application/json'

            }
        }

      
    }

}