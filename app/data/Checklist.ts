interface IChecklist {
    question: string
    description: string
}

export const ChecklistData: IChecklist[] = [
  {
    question: "Existe uma mensagem de erro? Você leu?",
    description:
      "Mensagens de erro exibem o problema que ocorreu e podem ajudar a identificar a causa.",
  },
  {
    question:
      "Procurou por uma implementação parecida ou semelhante em outra parte do código?",
    description:
      "Verificar códigos similares pode oferecer insights sobre como resolver problemas.",
  },
  {
    question: "Leu a documentação?",
    description:
      "A documentação oficial pode esclarecer dúvidas sobre a funcionalidade e o uso correto.",
  },
  {
    question: "Pesquisou sobre o erro?",
    description:
      "Pesquisar online pode revelar soluções ou discussões de problemas semelhantes.",
  },
  {
    question: "Você salvou o arquivo? Buildou o projeto?",
    description:
      "Arquivos não salvos ou builds pendentes podem causar comportamentos inesperados.",
  },
  {
    question:
      "Existe uma resposta para o que foi implementado? (Console, exibição em tela etc…)?",
    description:
      "Verificar a saída ajuda a entender se o código está funcionando conforme esperado.",
  },
  {
    question: "Está na URL correta?",
    description:
      "URLs incorretas podem levar a erros de carregamento ou dados não encontrados.",
  },
  {
    question: "A VPN está conectada?",
    description:
      "A falta de conexão VPN pode impedir o acesso a determinados serviços ou recursos.",
  },
  {
    question: "Reiniciou?",
    description:
      "Reiniciar a aplicação ou sistema pode resolver problemas temporários de execução.",
  },
  {
    question: "Limpou o cache?",
    description:
      "O cache desatualizado pode causar conflitos e exibir comportamentos antigos.",
  },
  {
    question: "A extensão do arquivo está correta?",
    description:
      "Extensões incorretas podem fazer com que o arquivo não seja reconhecido pelo sistema.",
  },
  {
    question: "A branch está correta?",
    description:
      "Trabalhar na branch errada pode resultar em modificações no local errado do código.",
  },
  {
    question: "As importações estão corretas?",
    description:
      "Importações incorretas podem levar a erros de referência ou falhas de execução.",
  },
  {
    question: "O usuário tem as permissões adequadas?",
    description:
      "Falta de permissões pode restringir o acesso a recursos e funcionalidades.",
  },
  {
    question: "Depois de tudo isso ainda não resolvi, o que posso fazer?",
    description:
      "Fazer uma pausa ajuda a refrescar a mente e pode permitir ver soluções que passaram despercebidas.",
  },
];
