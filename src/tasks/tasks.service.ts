import { Injectable } from '@nestjs/common';  // Decorador que marca a classe TasksService... podendo ser injetado.
import { Task } from './task.model';  // Modelo de dados para as tarefas.
import { v4 as uuidv4 } from 'uuid';  // Função para gerar identificadores únicos universais.
@Injectable()
export class TasksService {
    private tasks: Task[] =[];  // Array privado que armazena todas as tarefas.

    getAllTasks(): Task[] {
        return this.tasks;  // Retorna todas as tarefas armazenadas no array.
    }
    getTaskById(id: string): Task {
        return this.tasks.find(task => task.id === id);  // Encontra e retorna uma tarefa específica pelo seu ID.
    }

    criarTask(titulo: string, descricao: string): Task {  // Cria uma nova task definindo o título, descrição, ID e status.
        const task: Task = {
            id:uuidv4(),
            titulo,
            descricao,
            status: 'pendente'
        };  
        this.tasks.push(task);  // Adiciona a nova task no array tasks.
        return task;
    }

    updateTask(id: string, titulo: string, descricao: string, status: string): Task {  
        const task = this.getTaskById(id);
        task.titulo = titulo;
        task.descricao = descricao;
        task.status = status;
        return task;
    } // É atualizado com novos valores para titulo, descrição e status de acordo com o ID.

    deleteTask(id: string): void {  
        this.tasks = this.tasks.filter(task => task.id !== id)
    }  // A task é excluida do array ao informar o ID.
}

