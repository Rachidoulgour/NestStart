import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {

    @Get()
    getMessages() {

    }

    @Post()
    createMessage() {

    }

    @Get('/:id')
    getMessage() {

    }
}
