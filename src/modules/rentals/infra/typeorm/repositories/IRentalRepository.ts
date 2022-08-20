import { ICreateRentalDTO } from "../../../dtos/ICreateRentalDTO";
import { Rental } from "../entites/Rental";

interface IRentalRepository {
  findOpenRentalByCar(car_id: string): Promise<Rental>;
  findOpenRentalByUser(user_id: string): Promise<Rental>;
  createRental(data: ICreateRentalDTO): Promise<Rental>;
}

export { IRentalRepository };
