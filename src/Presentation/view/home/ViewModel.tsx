import { useContext, useState } from "react";
import { LoginAuthUseCase } from "../../../Domain/useCases/auth/LoginAuth";

const HomeViewModel = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  // const { user, getUserSession } = useUserLocal();
  //const { user, saveUserSession } = useContext( UserContext );
  //console.log('USUARIO DE SESION: ' + JSON.stringify(user));

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const login = async () => {
    if (isValidForm()) {
      const response = await LoginAuthUseCase(values.email, values.password);
      console.log("RESPONSE: " + JSON.stringify(response));
      if (!response.ok) {
        setErrorMessage(response.msg);
      } else {
        //saveUserSession(response.data);
      }
    }
  };

  /*  const updateNotificationToken = async (id: string , token: string) => {
        const result = await UpdateNotificationTokenUserUseCase(id, token);
    } */

  const isValidForm = (): boolean => {
    if (values.email === "") {
      setErrorMessage("Ingresa el correo electrónico");
      return false;
    }
    if (values.password === "") {
      setErrorMessage("Ingresa la contraseña");
      return false;
    }

    return true;
  };

  return {
    ...values,
    //user,
    onChange,
    login,
    //updateNotificationToken,
    errorMessage,
  };
};

export default HomeViewModel;
