import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';  // Importa os decoradores e serviçoes necessários


@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Get()  
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }  // Mapeia requisições GET para /tasks

    @Get(':id')  // Mapeia requisições GET para /tasks/:id
    getTaskById(@Param('id') id: string): Task {  // Retorna uma taks específica de acordo com o ID. @param extrai o parâmetro 'id' da url
        return this.tasksService.getTaskById(id);
    }  
    @Post()  // Mapeia requisições POST para /tasks
    createTask(@Body('titulo') titulo: string, @Body('descricao') descricao: string): Task {  // Cria uma nova task
        return this.tasksService.criarTask(titulo, descricao);  // @Body('titulo') @Body('descricao'): extrai os campos titulo e descricao do corpo da requisição
    }

    @Put(':id')  // Mapeia requisições PUT para /tasks/:id
    updateTask(  // Atualiza uma task existente
        @Param('id') id: string,
        @Body('titulo') titulo: string,
        @Body('descricao') descricao: string,
        @Body('status') status: string,
    ): Task {
        return this.tasksService.updateTask(id, titulo, descricao, status);
    }

    @Delete(':id')  // Mapeia requisições DELETE para /tasks/:id
    deleteTask(@Param('id') id: string): void {  // Deleta uma tarefa específica com base no ID
        this.tasksService.deleteTask(id); 
    }
}
