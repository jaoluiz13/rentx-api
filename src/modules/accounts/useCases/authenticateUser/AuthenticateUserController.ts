import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const authUserUseCase = container.resolve(AuthenticateUserUseCase);

    const { email, password } = request.body;
    const authInfo = await authUserUseCase.execute({ email, password });

    return response.status(200).json(authInfo);
  }
}
export { AuthenticateUserController };
