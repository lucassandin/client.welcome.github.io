import useSWR from "swr";
import { Welcome } from "../interfaces/interfaces";

export interface FetchProps {
  data: Welcome | undefined;
  error: any;
}

export function useFetchMessage(): FetchProps {
  try {
    const apiUrl = process.env.API_KEY;
    const url = `${apiUrl}/welcome/random`;
  
    const { data, error } = useSWR(url, async (url) => {
      const response = await fetch(url);
      const resultSet = await response.json();
  
      const data: Welcome = resultSet;
  
      return data;
    })
  
    return { data, error };
  } catch (error) {
    throw new Error('Erro ao consultar boas vindas')
  }
}