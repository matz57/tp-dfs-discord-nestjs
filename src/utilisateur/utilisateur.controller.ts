import { Body, Controller, Post } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';

@Controller()
export class UtilisateurController {
  constructor(private readonly utilisateurService: UtilisateurService) {}

  // @Get()
  // findAll() {
  //   return this.utilisateurService.findAll();
  // }

  @Post('inscription')
  async inscription(@Body() createUtilisateurDto: any) {
    return this.utilisateurService.create(createUtilisateurDto);
  }

  @Post('login')
  async create(@Body() createUtilisateurDto: any) {
    console.log(createUtilisateurDto);

    return '{"jwt": "le futur jwt"}';
  }
}
