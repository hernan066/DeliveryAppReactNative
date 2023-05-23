import { ResponseApiDelivery } from "../../Data/sources/remote/model/ResponseApiDelivery";

export interface AuthRepository {
  login(email: string, password: string): Promise<ResponseApiDelivery>;
}
