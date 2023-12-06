import { readFile, writeFile } from "fs/promises";

export class MessagesRespository {
    async findOne(id: string){
        const content = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(content);
        return messages[id];
    }

    async findAll() {

    }

    async create(message: string) {

    }
}