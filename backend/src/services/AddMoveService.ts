import { getCustomRepository } from "typeorm";
import AppError from "../erros/AppError";
import { Stocks } from "../models/Stocks";
import MoveRepository from "../repositories/MoveRepository";


interface Request{
    quantity: number
    name: string
    value: number
}

class AddMoveService {
    public async execute({quantity, name, value}: Request): Promise<Stocks>{
        const moveRepository = getCustomRepository(MoveRepository)

        const acao = await moveRepository.findOne({
            where: { name }
        })

        if(acao){
            throw new AppError("Tem essa ação")
        }

        const movimentation = moveRepository.create({
            quantity,
            name,
            value
        })

        await moveRepository.save(movimentation)

        return (movimentation)
    }
}

export default AddMoveService