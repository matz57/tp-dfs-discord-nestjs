import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ServeurService } from './serveur.service';
import { AuthGuard } from 'src/auth.guard';

@Controller('serveur')
export class ServeurController {
  constructor(private readonly serveurService: ServeurService) {}

  @Get()
  @UseGuards(AuthGuard)
  findAll(@Request() requete) {
    console.log(requete.user.sub);

    return this.serveurService.findAllPublic();
  }

  @Post()
  async create(@Body() createServeurDto: any) {
    return this.serveurService.create(createServeurDto);
  }
}
