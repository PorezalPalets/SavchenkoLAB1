import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";


async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Музыкальный магазин "Two Feet" документация ')
        .setDescription('Официальный сайт: twofeetmusic.com. Для всех и ни для кого')
        .setVersion('1')
        .addTag('Two Feet')
        .build()
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document)


    await app.listen(PORT, () => console.log(`Запущен на порту - ${PORT}`))
}

start()