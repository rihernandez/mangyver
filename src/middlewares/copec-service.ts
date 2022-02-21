import axios from "axios";

export default class copec {
  createNotice = async (body: string, uri: string): Promise<string> => {
    // call new SP

    try {
      await axios.post(uri, body, {
        auth: {
          username: <string>process.env.SAP_USER,
          password: <string>process.env.SAP_KEY,
        },
      });
    } catch (error) {
      // console.log("error with external service ", error);
    }
    return "";
  };
}
