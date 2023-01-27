import { findCarById } from "../repositories/car-repository.js";

async function findCar(id:number) {
  const carExists = await findCarById(id)
  if (!carExists) {
    throw new Error("Carro não encontrado");
  }
}

const carService = {
  findCar,
}

export default carService;