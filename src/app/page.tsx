'use client'
import { ButtonRoot } from "./components/button";
import SkeletonLoading from "./components/skeletonPosts";
import { useFetchMessage } from "./hook/useFetchMessage";

export default function Home() {
  const { data, error } = useFetchMessage();

  if(error) return <div>Erro ao carregar os posts</div>

  return (
    <main>
      <div className="">
        {!data && (
          <SkeletonLoading />
        )}
        <p data-cy-message="message-cy">{ data && data?.message }</p>
      </div>

      <ButtonRoot.buttons>
        <ButtonRoot.button 
          onClick={() => window.location.reload()} text="Obrigado" 
          data-cy-ver-mais="ver-mais-cy"
        />
      </ButtonRoot.buttons>
    </main>
  );
}
