import { MessagesRepository } from './message.repository';


export class MessagesService {
    messageRepo: MessagesRepository;
    constructor() {
        this.messageRepo = new MessagesRepository();
    }

    findOne(id: string){
        return this.messageRepo.findOne(id);
    }

    findAll(){
        return this.messageRepo.findAll();
    }

    create(message: string){
        return this.messageRepo.create(message);
    }

    // async findAll() {
    //     const content = await readFile('messages.json', 'utf8');
    //     const messages = JSON.parse(content);
    //     return messages;
    // }

    // async create(message: string) {
    //     const content = await readFile('messages.json', 'utf8');
    //     const messages = JSON.parse(content);
    //     const id = Math.floor(Math.random() * 999)
    //     messages[id] = { id, content: message };
    //     await writeFile('messages.json', JSON.stringify(messages));
    // }
}