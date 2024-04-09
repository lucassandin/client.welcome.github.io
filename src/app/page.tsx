'use client'
import { useFetchMessage } from "./hook/useFetchMessage";

export default function Home() {
  const { data, error } = useFetchMessage();

  if(error) return <div>Erro ao carregar os posts</div>

  return (
    <main className="container flex items-center justify-center">
      <div className="w-full text-center">
        {!data && (
          <p>Carregando...</p>
        )}
        <p data-cy-message="message-cy" 
          className="text-3xl antialiased">
          { data && data?.message }
        </p>
      </div>
    </main>
  );
}
