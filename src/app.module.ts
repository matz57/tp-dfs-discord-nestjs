import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeurModule } from './serveur/serveur.module';
import { UtilisateurModule } from './utilisateur/utilisateur.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/dfs_discord'),
    ServeurModule,
    UtilisateurModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
